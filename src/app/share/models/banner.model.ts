export class BannerModel {
  adClient: string;
  adSlot: number;
  adFormat: string;
  fullWidthResponsive: boolean;

  constructor(adClient: string, adSlot: number, adFormat: string, fullWidthResponsive: boolean) {
    this.adClient = adClient;
    this.adSlot = adSlot;
    this.adFormat = adFormat || 'auto';
    this.fullWidthResponsive = fullWidthResponsive || true;
  }
}
