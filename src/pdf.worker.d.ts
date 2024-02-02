import { WorkerMessageHandler } from "pdfjs-dist/build/pdf.worker.entry.js";

declare module "pdfjs-dist/build/pdf.worker.entry" {
  interface GlobalWorkerOptions {
    workerSrc: string;
    workerPort: number;
    workerBlob?: Blob;
    verbosity: number;
    isEvalSupported: boolean;
    maxImageSize: number | null;
    disableFontFace: boolean;
    postMessageTransfers: boolean;
    standardFontDataUrl: string;
  }

  export { WorkerMessageHandler };
  export default GlobalWorkerOptions;
}
