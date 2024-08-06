import { useRouter } from "next/router";
import { EndpointTypes } from "../models/types";
export default function useQueryContext() {
  const router = useRouter();
  const { cluster } = router.query;
  const endpoint = cluster ? (cluster as EndpointTypes) : "mainnet";
  const hasClusterOption = endpoint !== "mainnet";
  const fmtUrlWithCluster = (url) => {
    if (hasClusterOption) {
      const mark = url.includes("?") ? "&" : "?";
      // decodeURIComponent 是 JavaScript 的一个内置函数，用于解码 URI 组件
      // 使用了模板字符串 ${url}${mark}cluster=${endpoint} 来生成包含 cluster 参数的 URL 字符串。
      return decodeURIComponent(`${url}${mark}cluster=${endpoint}`);
    }
    return url;
  };
  return {
    fmtUrlWithCluster,
  };
}
