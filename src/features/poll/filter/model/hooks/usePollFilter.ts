import { useState, useCallback, useMemo } from "react";
import type { Poll } from "@/entities/poll/model/types";

export function usePollFilter(polls: Poll[]) {
  const [filterQuery, setFilterQuery] = useState("");

  const handleFilterChange = useCallback((query: string) => {
    setFilterQuery(query);
  }, []);

  const filteredPolls = useMemo(() => {
    if (!filterQuery.trim()) return polls;

    const query = filterQuery.toLowerCase();
    return polls.filter((poll) =>
      poll.question.toLowerCase().includes(query)
    );
  }, [polls, filterQuery]);

  return {
    filterQuery,
    filteredPolls,
    handleFilterChange,
  };
}
