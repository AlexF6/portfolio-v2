/// <reference types="astro/client" />

interface ModelViewerElement extends HTMLElement {
  src: string | null;
  alt: string | null;
  cameraOrbit: string | null;
  autoplay: boolean;
  exposure: string | null;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<ModelViewerElement>,
        ModelViewerElement
      >;
    }
  }

  // This is so that document.getElementById and other DOM selectors recognize it.
  interface HTMLElementTagNameMap {
    'model-viewer': ModelViewerElement;
  }
}