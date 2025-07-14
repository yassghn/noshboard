/**
 * audio.ts
 *
 * @memberof noshboard
 * @module noshboard/audio
 * @property {noshboard.module:noshboard/audio} audio noshboard audio
 */

import state from '@noshboard/state'

/**
 * @type {PCMPlayer}
 * @typedef {class} PCMPlayer mock pcm player class
 */
declare class PCMPlayer {
    public constructor({ ...any })
    public volume(x: any): any
    public feed(x: any): any
}

const _audioState = {
    isPlaying: false
}

/**
 * get audio context
 *
 * @returns {AudioContext} audio context
 */
function _hewAudioContext() {
    const ctx = new AudioContext()
    return ctx
}

/**
 * get audio source
 *
 * @param {AudioContext} audioCtx audio context
 * @returns {AudioBufferSourceNode} audio source
 */
function _hewAudioSource(audioCtx: AudioContext) {
    const audioSrc = audioCtx.createBufferSource()
    audioSrc.connect(audioCtx.destination)
    return audioSrc
}

/**
 * get audio volume node
 *
 * @param {AudioContext} audioCtx audio context
 * @param {AudioBufferSourceNode} audioSrc audio source
 * @returns {GainNode} audio volume
 */
function _hewAudioGain(audioCtx: AudioContext, audioSrc: AudioBufferSourceNode) {
    const audioGain = audioCtx.createGain()
    audioGain.connect(audioCtx.destination)
    audioSrc.connect(audioGain)
    return audioGain
}

/**
 * start audio
 *
 * @param {AudioBuffer} audioData audio data to play
 */
function _startAudio(audioData: AudioBuffer) {
    // hew audio context and source
    const audioCtx = _hewAudioContext()
    const audioSrc = _hewAudioSource(audioCtx)
    const audioGain = _hewAudioGain(audioCtx, audioSrc)
    // set volume
    audioGain.gain.value = 7
    // begin playback
    audioSrc.buffer = audioData
    audioSrc.start(0)
    audioSrc.loop = true
}

/**
 * audio data decode error callback
 *
 * @param {any} error audio data decode error
 */
function _audioDataDecodeError(error: any) {
    if (state.debug) {
        console.error(error)
    }
}

/**
 * decode audio data
 *
 * @param {ArrayBuffer} audioData decode audio data
 */
async function _decodeAudioData(audioData: ArrayBuffer) {
    // decode audio data
    try {
        const audioCtx = _hewAudioContext()
        await audioCtx.decodeAudioData(
            // array buffer
            audioData,
            // success callback
            (audioData: AudioBuffer) => {
                _startAudio(audioData)
            },
            // error callback
            (error: any) => {
                _audioDataDecodeError(error)
            }
        )
    } catch (e) {
        if (state.debug) {
            console.log('audio decode error: check file, file name, missing file, etc.')
        }
    }
}

/**
 * bypass neocities file restrictions for free user accounts.
 *
 * convert audio file (opus, etc...) to raw pcm
 * $ ffmpeg -i 'audioFile.ext' -f s16le -acodec pcm_s16le -ar 44100 'outFile.raw'
 *
 * rename converted file extension to *.json and upload to neocities
 *
 * play with pcm-player (imported via html <script> tag)
 *
 * @param {ArrayBuffer} audioData
 */
function _hackNeocities(audioData: ArrayBuffer) {
    try {
        // init player
        const player = new PCMPlayer({
            inputCodec: 'Int16',
            channels: 2,
            sampleRate: 44100,
            flushTime: 0,
            // loop audio
            onended: (audioSrc: AudioBufferSourceNode, event: any) => {
                if (audioSrc.buffer) {
                    _startAudio(audioSrc.buffer)
                }
            }
        })
        // set volume
        player.volume(7)
        // begin playback
        player.feed(audioData)
    } catch (e) {
        if (state.debug) {
            console.error(e)
        }
    }
}

/**
 * check if file is hosted on neocities
 *
 * @returns {boolean} flag indicating if file is hosted on neocities
 */
function _isNeocitiesDomain() {
    const retVal = { isNeocitiesDomain: false }
    const href = window.location.href
    if (href.includes('neocities.org')) {
        retVal.isNeocitiesDomain = true
    }
    return retVal.isNeocitiesDomain
}

/**
 * request audio data
 */
async function _requestAudioData() {
    const playlistJson = await (await fetch('/resource/data/audio.json')).json()
    const request = new XMLHttpRequest()
    request.open('GET', playlistJson.audio.current, true)
    request.responseType = 'arraybuffer'
    request.onload = () => {
        // get audio data from response
        const audioData = request.response
        // check if we're doing neocities hack
        if (_isNeocitiesDomain()) {
            _hackNeocities(audioData)
        } else {
            _decodeAudioData(audioData)
        }
    }
    request.send()
}

/**
 * validate and request audio data
 */
async function _validateRequestAudio() {
    try {
        // init audio
        _requestAudioData()
    } catch (e) {
        console.error(e)
    }
}

/**
 * process mouse click to begin playing audio. also responds to a variety
 * of other input events, including keyboard key presses, because browsers
 * are incredibly borken and the ieee standards are absolute garbage.
 *
 * @param {MouseEvent} event process mouse click event
 */
function _processClick(event: MouseEvent) {
    event.preventDefault()
    // check for mouse click
    if (event.buttons != undefined) {
        // check if we're already playing audio
        if (!_audioState.isPlaying) {
            // set audio state
            _audioState.isPlaying = true
            _validateRequestAudio()
        }
    }
}

/**
 * add event listener for page click
 */
function _addDocumentClickListener() {
    document.addEventListener('click', _processClick)
}

/**
 * play audio
 */
function _playAudio() {
    _addDocumentClickListener()
}

const audio = {
    playAudio: () => {
        _playAudio()
    }
}

export default audio
