/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AnimationsType } from "./animations";
import { ErrorCorrectionLevel, OutputMode } from "./enums";
import { IRotatingGlobe } from "./interfaces/IRotatingGLobe";
export namespace Components {
    interface AnimateThis {
        /**
          * A DOMString with which to reference the animation.
         */
        "animateId"?: string;
        /**
          * Name of the animation to get the keyFrames
         */
        "animation"?: AnimationsType;
        /**
          * Start the animation when the component is mounted.
         */
        "autoPlay"?: boolean;
        /**
          * Clears all `KeyframeEffects` caused by this animation and aborts its playback.
         */
        "cancel": () => Promise<void>;
        /**
          * Clear the current animation
         */
        "clear": () => Promise<void>;
        /**
          * Determines how values are combined between this animation and other, separate animations that do not specify their own specific composite operation. Defaults to `replace`.
         */
        "composite"?: CompositeOperation;
        /**
          * Sets the current time value of the animation in milliseconds, whether running or paused.
         */
        "currentTime"?: number;
        /**
          * The number of milliseconds to delay the start of the animation. Defaults to 0.
         */
        "delay"?: number;
        /**
          * Destroy the current animation
         */
        "destroy": () => Promise<void>;
        /**
          * Direction of the animation.
         */
        "direction"?: PlaybackDirection;
        /**
          * The number of milliseconds each iteration of the animation takes to complete. Defaults to 0.
         */
        "duration"?: number;
        /**
          * The rate of the animation's change over time.
         */
        "easing"?: string;
        /**
          * The number of milliseconds to delay after the end of an animation.
         */
        "endDelay"?: number;
        /**
          * Dictates whether the animation's effects should be reflected by the element(s) prior to playing ("backwards"), retained after the animation has completed playing ("forwards"), or both. Defaults to "none".
         */
        "fill"?: FillMode;
        /**
          * Sets the current playback time to the end of the animation corresponding to the current playback direction.
         */
        "finish": () => Promise<void>;
        /**
          * The class name to be applied when the animation starts
         */
        "fromClassName"?: string;
        /**
          * Returns the current time value of the animation in milliseconds, whether running or paused.
         */
        "getCurrentTime": () => Promise<number>;
        /**
          * Indicates whether the animation is currently waiting for an asynchronous operation such as initiating playback or pausing a running animation.
         */
        "getPending": () => Promise<boolean>;
        /**
          * Returns an enumerated value describing the playback state of an animation.
         */
        "getPlayState": () => Promise<AnimationPlayState>;
        /**
          * Returns the playback rate of the animation.
         */
        "getPlaybackRate": () => Promise<number>;
        /**
          * Returns the scheduled time when an animation's playback should begin.
         */
        "getStartTime": () => Promise<number>;
        /**
          * Determines how values build from iteration to iteration in this animation.
         */
        "iterationComposite"?: IterationCompositeOperation;
        /**
          * Describes at what point in the iteration the animation should start.
         */
        "iterationStart"?: number;
        /**
          * The number of times the animation should repeat. Defaults to `1`, and can also take a value of `Infinity` to make it repeat for as long as the element exists.
         */
        "iterations"?: number;
        /**
          * Keyframes of the animation.
         */
        "keyFrames"?: Keyframe[];
        /**
          * Keyframes of the animation in string format.
         */
        "keyFramesData"?: string;
        /**
          * Default options of the animation.
         */
        "options"?: KeyframeAnimationOptions;
        /**
          * Default options of the animation in string format.
         */
        "optionsData"?: string;
        /**
          * Suspends playback of the animation.
         */
        "pause": () => Promise<void>;
        /**
          * Starts or resumes playing of an animation.
         */
        "play": () => Promise<void>;
        /**
          * Sets the playback rate of the animation.
         */
        "playbackRate"?: number;
        /**
          * Reverses the playback direction, meaning the animation ends at its beginning.
         */
        "reverse": () => Promise<void>;
        /**
          * Sets the scheduled time when an animation's playback should begin.
         */
        "startTime"?: number;
        /**
          * The class name to be applied when the animation ends
         */
        "toClassName"?: string;
    }
    interface ComponentTemplate {
        "dataTopics"?: string;
        "dataType"?: 'cloud' | 'messages' | 'indicator' | 'proxy';
        "setData": (data: any) => Promise<void>;
    }
    interface DateTime {
        /**
          * DayJS datetime formatting
         */
        "dateformat": string;
        /**
          * DayJS country-based locale formating
         */
        "locale": 'fr' | 'en' | 'de' | 'zh-cn' | 'ja';
    }
    interface EchartsBar {
        "height"?: number;
        "option": any;
        "setOption": (option: any) => Promise<void>;
        "width"?: number;
    }
    interface EchartsLine {
        "height"?: number;
        "option": any;
        "setOption": (option: any) => Promise<void>;
        "width"?: number;
    }
    interface EchartsPie {
        "height"?: number;
        "option": any;
        "setOption": (option: any) => Promise<void>;
        "width"?: number;
    }
    interface QrCode {
        "colorDark": string;
        "colorLight": string;
        /**
          * String to encode in QR
         */
        "contents": string;
        /**
          * ErrorCorrectionLevel.High
         */
        "errorCorrectionLevel": ErrorCorrectionLevel;
        "margin": number;
        "outputMode": OutputMode;
        "scale": number;
    }
    interface RotatingGlobe {
        /**
          * ISO-1302 country code to rotate to
         */
        "code": string;
        /**
          * Canvas height
         */
        "height": number;
        /**
          * Globe options
         */
        "options": IRotatingGlobe;
        "setCountryCode": (code: string) => Promise<void>;
        /**
          * Canvas width
         */
        "width": number;
    }
    interface SlowCounter {
        /**
          * initial counter value multiplier (i.e. start at 99.99% of value)
         */
        "multiplier": number;
        /**
          * For showing change percentage
         */
        "showPercent"?: 0 | 1;
        /**
          * Start value of counter
         */
        "start": number;
        /**
          * Counter value
         */
        "value": number;
    }
}
export interface AnimateThisCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAnimateThisElement;
}
export interface ComponentTemplateCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLComponentTemplateElement;
}
declare global {
    interface HTMLAnimateThisElement extends Components.AnimateThis, HTMLStencilElement {
    }
    var HTMLAnimateThisElement: {
        prototype: HTMLAnimateThisElement;
        new (): HTMLAnimateThisElement;
    };
    interface HTMLComponentTemplateElement extends Components.ComponentTemplate, HTMLStencilElement {
    }
    var HTMLComponentTemplateElement: {
        prototype: HTMLComponentTemplateElement;
        new (): HTMLComponentTemplateElement;
    };
    interface HTMLDateTimeElement extends Components.DateTime, HTMLStencilElement {
    }
    var HTMLDateTimeElement: {
        prototype: HTMLDateTimeElement;
        new (): HTMLDateTimeElement;
    };
    interface HTMLEchartsBarElement extends Components.EchartsBar, HTMLStencilElement {
    }
    var HTMLEchartsBarElement: {
        prototype: HTMLEchartsBarElement;
        new (): HTMLEchartsBarElement;
    };
    interface HTMLEchartsLineElement extends Components.EchartsLine, HTMLStencilElement {
    }
    var HTMLEchartsLineElement: {
        prototype: HTMLEchartsLineElement;
        new (): HTMLEchartsLineElement;
    };
    interface HTMLEchartsPieElement extends Components.EchartsPie, HTMLStencilElement {
    }
    var HTMLEchartsPieElement: {
        prototype: HTMLEchartsPieElement;
        new (): HTMLEchartsPieElement;
    };
    interface HTMLQrCodeElement extends Components.QrCode, HTMLStencilElement {
    }
    var HTMLQrCodeElement: {
        prototype: HTMLQrCodeElement;
        new (): HTMLQrCodeElement;
    };
    interface HTMLRotatingGlobeElement extends Components.RotatingGlobe, HTMLStencilElement {
    }
    var HTMLRotatingGlobeElement: {
        prototype: HTMLRotatingGlobeElement;
        new (): HTMLRotatingGlobeElement;
    };
    interface HTMLSlowCounterElement extends Components.SlowCounter, HTMLStencilElement {
    }
    var HTMLSlowCounterElement: {
        prototype: HTMLSlowCounterElement;
        new (): HTMLSlowCounterElement;
    };
    interface HTMLElementTagNameMap {
        "animate-this": HTMLAnimateThisElement;
        "component-template": HTMLComponentTemplateElement;
        "date-time": HTMLDateTimeElement;
        "echarts-bar": HTMLEchartsBarElement;
        "echarts-line": HTMLEchartsLineElement;
        "echarts-pie": HTMLEchartsPieElement;
        "qr-code": HTMLQrCodeElement;
        "rotating-globe": HTMLRotatingGlobeElement;
        "slow-counter": HTMLSlowCounterElement;
    }
}
declare namespace LocalJSX {
    interface AnimateThis {
        /**
          * A DOMString with which to reference the animation.
         */
        "animateId"?: string;
        /**
          * Name of the animation to get the keyFrames
         */
        "animation"?: AnimationsType;
        /**
          * Start the animation when the component is mounted.
         */
        "autoPlay"?: boolean;
        /**
          * Determines how values are combined between this animation and other, separate animations that do not specify their own specific composite operation. Defaults to `replace`.
         */
        "composite"?: CompositeOperation;
        /**
          * Sets the current time value of the animation in milliseconds, whether running or paused.
         */
        "currentTime"?: number;
        /**
          * The number of milliseconds to delay the start of the animation. Defaults to 0.
         */
        "delay"?: number;
        /**
          * Direction of the animation.
         */
        "direction"?: PlaybackDirection;
        /**
          * The number of milliseconds each iteration of the animation takes to complete. Defaults to 0.
         */
        "duration"?: number;
        /**
          * The rate of the animation's change over time.
         */
        "easing"?: string;
        /**
          * The number of milliseconds to delay after the end of an animation.
         */
        "endDelay"?: number;
        /**
          * Dictates whether the animation's effects should be reflected by the element(s) prior to playing ("backwards"), retained after the animation has completed playing ("forwards"), or both. Defaults to "none".
         */
        "fill"?: FillMode;
        /**
          * The class name to be applied when the animation starts
         */
        "fromClassName"?: string;
        /**
          * Determines how values build from iteration to iteration in this animation.
         */
        "iterationComposite"?: IterationCompositeOperation;
        /**
          * Describes at what point in the iteration the animation should start.
         */
        "iterationStart"?: number;
        /**
          * The number of times the animation should repeat. Defaults to `1`, and can also take a value of `Infinity` to make it repeat for as long as the element exists.
         */
        "iterations"?: number;
        /**
          * Keyframes of the animation.
         */
        "keyFrames"?: Keyframe[];
        /**
          * Keyframes of the animation in string format.
         */
        "keyFramesData"?: string;
        /**
          * This event is sent when the animation is cancelled.
         */
        "onCancel"?: (event: AnimateThisCustomEvent<HTMLElement>) => void;
        /**
          * This event is sent when the animation is going to play.
         */
        "onRun"?: (event: AnimateThisCustomEvent<HTMLElement>) => void;
        /**
          * This event is sent when the animation finishes playing.
         */
        "onStop"?: (event: AnimateThisCustomEvent<HTMLElement>) => void;
        /**
          * Default options of the animation.
         */
        "options"?: KeyframeAnimationOptions;
        /**
          * Default options of the animation in string format.
         */
        "optionsData"?: string;
        /**
          * Sets the playback rate of the animation.
         */
        "playbackRate"?: number;
        /**
          * Sets the scheduled time when an animation's playback should begin.
         */
        "startTime"?: number;
        /**
          * The class name to be applied when the animation ends
         */
        "toClassName"?: string;
    }
    interface ComponentTemplate {
        "dataTopics"?: string;
        "dataType"?: 'cloud' | 'messages' | 'indicator' | 'proxy';
        "onSubscribe"?: (event: ComponentTemplateCustomEvent<any>) => void;
    }
    interface DateTime {
        /**
          * DayJS datetime formatting
         */
        "dateformat"?: string;
        /**
          * DayJS country-based locale formating
         */
        "locale"?: 'fr' | 'en' | 'de' | 'zh-cn' | 'ja';
    }
    interface EchartsBar {
        "height"?: number;
        "option"?: any;
        "width"?: number;
    }
    interface EchartsLine {
        "height"?: number;
        "option"?: any;
        "width"?: number;
    }
    interface EchartsPie {
        "height"?: number;
        "option"?: any;
        "width"?: number;
    }
    interface QrCode {
        "colorDark"?: string;
        "colorLight"?: string;
        /**
          * String to encode in QR
         */
        "contents"?: string;
        /**
          * ErrorCorrectionLevel.High
         */
        "errorCorrectionLevel"?: ErrorCorrectionLevel;
        "margin"?: number;
        "outputMode"?: OutputMode;
        "scale"?: number;
    }
    interface RotatingGlobe {
        /**
          * ISO-1302 country code to rotate to
         */
        "code"?: string;
        /**
          * Canvas height
         */
        "height"?: number;
        /**
          * Globe options
         */
        "options"?: IRotatingGlobe;
        /**
          * Canvas width
         */
        "width"?: number;
    }
    interface SlowCounter {
        /**
          * initial counter value multiplier (i.e. start at 99.99% of value)
         */
        "multiplier"?: number;
        /**
          * For showing change percentage
         */
        "showPercent"?: 0 | 1;
        /**
          * Start value of counter
         */
        "start"?: number;
        /**
          * Counter value
         */
        "value"?: number;
    }
    interface IntrinsicElements {
        "animate-this": AnimateThis;
        "component-template": ComponentTemplate;
        "date-time": DateTime;
        "echarts-bar": EchartsBar;
        "echarts-line": EchartsLine;
        "echarts-pie": EchartsPie;
        "qr-code": QrCode;
        "rotating-globe": RotatingGlobe;
        "slow-counter": SlowCounter;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "animate-this": LocalJSX.AnimateThis & JSXBase.HTMLAttributes<HTMLAnimateThisElement>;
            "component-template": LocalJSX.ComponentTemplate & JSXBase.HTMLAttributes<HTMLComponentTemplateElement>;
            "date-time": LocalJSX.DateTime & JSXBase.HTMLAttributes<HTMLDateTimeElement>;
            "echarts-bar": LocalJSX.EchartsBar & JSXBase.HTMLAttributes<HTMLEchartsBarElement>;
            "echarts-line": LocalJSX.EchartsLine & JSXBase.HTMLAttributes<HTMLEchartsLineElement>;
            "echarts-pie": LocalJSX.EchartsPie & JSXBase.HTMLAttributes<HTMLEchartsPieElement>;
            "qr-code": LocalJSX.QrCode & JSXBase.HTMLAttributes<HTMLQrCodeElement>;
            "rotating-globe": LocalJSX.RotatingGlobe & JSXBase.HTMLAttributes<HTMLRotatingGlobeElement>;
            "slow-counter": LocalJSX.SlowCounter & JSXBase.HTMLAttributes<HTMLSlowCounterElement>;
        }
    }
}
