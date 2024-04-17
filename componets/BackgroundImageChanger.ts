export class BackgroundImageChanger {
  private images: string[];
  private currentIndex: number;
  private backgroundElement: HTMLElement;
  private intervalId: any;

  constructor(images: string[], backgroundElementId: string) {
    this.images = images;
    this.currentIndex = 0;
    this.backgroundElement = document.getElementById(backgroundElementId)!;
    this.intervalId = setInterval(this.changeBackground.bind(this), 20000); // Change the image every 20 seconds
  }
  public changeBackgroundBack() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.backgroundElement.style.backgroundImage = `url('${
      this.images[this.currentIndex]
    }')`;
  }

  public changeBackgroundNext() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.backgroundElement.style.backgroundImage = `url('${
      this.images[this.currentIndex]
    }')`;
  }

  private changeBackground() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.setBackground();
  }

  private goToPreviousImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.setBackground();
  }

  private goToNextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.setBackground();
  }

  private setBackground() {
    this.backgroundElement.style.backgroundImage = `url('${
      this.images[this.currentIndex]
    }')`;
  }

  public stop() {
    clearInterval(this.intervalId);
  }
}
