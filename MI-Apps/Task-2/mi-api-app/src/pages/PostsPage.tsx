import React, { useEffect, useState } from "react";
import { Modal, message } from "antd";
import { getPosts, type PostItem } from "../api/posts";
import AdvancedFilters from "../components/Filters/AdvancedFilters";
import AdvancedPostsTable from "../components/PostsTable/AdvancedPostsTable";
import { PageWrapper, Title } from "../Styled/PostsPage.styled";
import type { FilterValues } from "../Constants/Interfaces/PostPage.interface";






const PostsPage: React.FC = () => {
  const [allPosts, setAllPosts] = useState<PostItem[]>([]);
  const [filtered, setFiltered] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState<FilterValues>({
    title: "",
    userId: null,
    body: "",
  });

  
  const openDashboard = (item: PostItem) => {
    console.log("Dashboard item:", item);

  };



  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await getPosts();
        setAllPosts(res);
        setFiltered(res);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  // Apply Filters
  const applyFilter = () => {
    let result = allPosts;

    if (filters.title.trim()) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(filters.title.toLowerCase())
      );
    }

    if (filters.userId !== null) {
      result = result.filter((p) => p.userId === filters.userId);
    }

    if (filters.body.trim()) {
      result = result.filter((p) =>
        p.body.toLowerCase().includes(filters.body.toLowerCase())
      );
    }

    message.success("Filters applied");
    setFiltered(result);
  };

  // Clear Filters
  const clearFilter = () => {
    const empty: FilterValues = { title: "", userId: null, body: "" };
    setFilters(empty);
    setFiltered(allPosts);
    message.info("Filters cleared");
  };

  // View Post Modal
  const viewPost = (item: PostItem) => {
    Modal.info({
      title: item.title,
      width: 600,
      content: <p>{item.body}</p>,
    });
  };

  return (
    <PageWrapper>
      <Title>Advanced Posts Dashboard</Title>

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
        onOpenDashboard={openDashboard}
      />
      {/* data,
       loading,
      onView,
      onOpenDashboard, */}
      {/* //prop - 3/4 */}
    </PageWrapper>
  );
};

export default PostsPage;
