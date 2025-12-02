import React, { useEffect, useState } from "react";
import AppLayout from "../layout/AppLayout";
import AdvancedFilters from "../components/Filters/AdvancedFilters";
import AdvancedPostsTable from "../components/PostsTable/AdvancedPostsTable";
import { getPosts, type PostItem } from "../api/posts";

const Dashboard: React.FC = () => {
  const [allPosts, setAllPosts] = useState<PostItem[]>([]);
  const [filtered, setFiltered] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    title: "",
    userId: null as number | null,
    body: ""
  });

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const posts = await getPosts();
      setAllPosts(posts);
      setFiltered(posts);
      setLoading(false);
    };
    load();
  }, []);

  const applyFilter = () => {
    let result = allPosts;

    if (filters.title)
      result = result.filter((p) =>
        p.title.toLowerCase().includes(filters.title.toLowerCase())
      );

    if (filters.userId)
      result = result.filter((p) => p.userId === filters.userId);

    if (filters.body)
      result = result.filter((p) =>
        p.body.toLowerCase().includes(filters.body.toLowerCase())
      );

    setFiltered(result);
  };

  const clearFilters = () => {
    setFilters({ title: "", userId: null, body: "" });
    setFiltered(allPosts);
  };

  const viewItem = (item: PostItem) => alert(item.title);

  return (
    <AppLayout>
      <AdvancedFilters
        filters={filters}
        setFilters={setFilters}
        onApply={applyFilter}
        onClear={clearFilters}
      />

      {/* TABLE ONLY — no heading */}
      <AdvancedPostsTable
        data={filtered}
        loading={loading}
        onView={viewItem}
      />
    </AppLayout>
  );
};

export default Dashboard;
