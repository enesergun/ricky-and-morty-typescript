import { Arrow } from "@/constants/icons";
import { useRouter } from "next/router";
import React from "react";
import cn from "classnames";
import styles from "./Pagination.module.scss";
interface PaginationProps {
  info: {
    prev: boolean;
    pages: number;
    next: boolean;
    count: number;
  };
}

const Pagination: React.FC<PaginationProps> = ({ info }) => {
  const router = useRouter();
  const { prev, pages, next } = info;
  const currentPage = Number(router.query.page) || 1;

  const handlePagination = (page: number) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: page },
    });
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(pages, currentPage + 1);

    if (startPage > 1) {
      pageNumbers.push(
        <li key={1} onClick={() => handlePagination(1)}>
          <span
            /* className={` hover:bg-zinc-600 ${
              1 === currentPage ? "bg-zinc-600" : ""
            }`} */
            className={cn(
              styles.paginationElement,
              1 === currentPage && styles.active
            )}
          >
            1
          </span>
        </li>
      );

      if (startPage > 2) {
        pageNumbers.push(
          <li key="ellipsis-start">
            <span className={cn(styles.paginationElement)}>...</span>
          </li>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      if (i !== pages) {
        pageNumbers.push(
          <li key={i} onClick={() => handlePagination(i)}>
            <span
              className={cn(
                styles.paginationElement,
                i === currentPage && styles.active
              )}
            >
              {i}
            </span>
          </li>
        );
      }
    }

    if (currentPage < pages - 2) {
      if (currentPage < pages - 2) {
        pageNumbers.push(
          <li key="ellipsis-end">
            <span className={cn(styles.paginationElement)}>...</span>
          </li>
        );
      }
    }
    pageNumbers.push(
      <li key={pages} onClick={() => handlePagination(pages)}>
        <span
          className={cn(
            styles.paginationElement,
            pages === currentPage && styles.active
          )}
        >
          {pages}
        </span>
      </li>
    );

    return pageNumbers;
  };

  return (
    <nav className={cn(styles.pagination)}>
      <ul className={cn(styles.paginationList)}>
        {prev && (
          <li
            key={currentPage - 1}
            onClick={() => handlePagination(currentPage - 1)}
          >
            <span className={cn(styles.arrowButtons)}>
              <span className={cn(styles.rotate90deg)}>
                <Arrow size={16} />
              </span>
            </span>
          </li>
        )}
        {renderPageNumbers()}
        {next && (
          <li
            key={currentPage + 1}
            onClick={() => handlePagination(currentPage + 1)}
          >
            <span className={cn(styles.arrowButtons)}>
              <span className={cn(styles.rotate270deg)}>
                <Arrow size={16} />
              </span>
            </span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
