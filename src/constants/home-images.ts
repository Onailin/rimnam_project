/** Local images from public/home/ — shared between home and about pages */
export const homeImages = {
  rimnamBanner: "/home/rimnam_banner.jpg",
  banner: "/home/banner.jpg",
  rimnam: "/home/rimnam.jpg",
} as const;

export const homeImageList = [
  homeImages.rimnamBanner,
  homeImages.banner,
  homeImages.rimnam,
] as const;
