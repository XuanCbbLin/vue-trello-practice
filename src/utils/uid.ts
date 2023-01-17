// 建立亂數 id
export const uid = () => Math.random().toString(36).substring(2) + Date.now().toString(36);
