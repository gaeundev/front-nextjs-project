export const sideMenu = () => {
  interface item {
    url: string;
    name: string;
  }
  const menuList: item[] = [
    { url: '', name: '카테고리1' },
    { url: '', name: '카테고리2' },
    { url: '', name: '카테고리3' },
  ];

  return menuList;
};
