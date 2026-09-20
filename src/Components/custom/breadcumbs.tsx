import { Link } from "react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb"

interface Props {
    currentPage: string;
}


export const Breadcumbs = ({currentPage}: Props ) => {
  return (
    <Breadcrumb className="text-white">
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
      <Link to="/">
        Home
      </Link>
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>{currentPage}</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
  );
};

