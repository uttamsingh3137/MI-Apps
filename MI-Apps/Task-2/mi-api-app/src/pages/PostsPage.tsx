import React, { useEffect, useState } from "react";
import { Modal, message } from "antd";
import { getPosts, type PostItem } from "../api/posts";
import AdvancedFilters from "../components/Filters/AdvancedFilters";
import AdvancedPostsTable from "../components/PostsTable/AdvancedPostsTable";

const PostsPage: React.FC = () => {
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
      const res = await getPosts();
      setAllPosts(res);
      setFiltered(res);
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

    message.success("Filters applied");
    setFiltered(result);
  };

  const clearFilter = () => {
    setFilters({ title: "", userId: null, body: "" });
    setFiltered(allPosts);
    message.info("Filters cleared");
  };

  const viewPost = (item: PostItem) => {
    Modal.info({
      title: item.title,
      width: 600,
      content: <p>{item.body}</p>
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Advanced Posts Dashboard</h2>

      <AdvancedFilters
        filters={filters}
        setFilters={setFilters}
        onApply={applyFilter}
        onClear={clearFilter}
      />

      <AdvancedPostsTable
        data={filtered}
        loading={loading}
        onView={viewPost}
      />
    </div>
  );
};

export default PostsPage;
