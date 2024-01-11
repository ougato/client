export = Whammy;
export as namespace whammy;

declare namespace Whammy {
    class Video {
        constructor(fps?: number);
        add(frame: Uint8Array, duration?: number): void;
        compile(): Blob;
    }
}