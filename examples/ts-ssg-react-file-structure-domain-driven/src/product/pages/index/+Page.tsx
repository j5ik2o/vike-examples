import { PageProps } from "../../../renderer/types";

const Page = ({ routeParams }: { routeParams: PageProps }) => {
  return <>Product {routeParams.productId}</>;
};

export default Page;
