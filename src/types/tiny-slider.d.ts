declare module "tiny-slider/src/tiny-slider" {
  export interface TinySliderInstance {
    destroy: () => void;
    goTo: (target: number | "prev" | "next") => void;
    pause: () => void;
    play: () => void;
    update?: () => void;
  }

  export interface TinySliderSettings {
    container: string | HTMLElement;
    items?: number;
    slideBy?: "page" | number;
    autoplay?: boolean;
    mouseDrag?: boolean;
    gutter?: number;
    nav?: boolean;
    controls?: boolean;
    autoplayButtonOutput?: boolean;
    [key: string]: any;
  }

  export function tns(settings: TinySliderSettings): TinySliderInstance;
}

export interface IsVisible {
    isVisible: boolean
}
