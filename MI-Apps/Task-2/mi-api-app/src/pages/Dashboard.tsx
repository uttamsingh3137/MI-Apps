import React, { useEffect, useState } from "react";
import AdvancedFilters from "../components/Filters/AdvancedFilters";
import AdvancedPostsTable from "../components/PostsTable/AdvancedPostsTable";
import { getPosts, type PostItem } from "../api/posts";
// import ApiDashboardModal from "../api/ApiDashboardModal";
import ApiDashboardDrawer from "../components/ApiDashboardDrawer/ApiDashboardDrawer";
import type { FilterValues } from "../Constants/Interfaces/Dashboard.interface";


const Dashboard: React.FC = () => {
  const [allPosts, setAllPosts] = useState<PostItem[]>([]);
  const [filtered, setFiltered] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState(false);

  const [dashboardOpen, setDashboardOpen] = useState(false);

  const [filters, setFilters] = useState<FilterValues>({
    title: "",
    userId: null,
    body: "",
  });

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const posts = await getPosts();
        setAllPosts(posts);
        setFiltered(posts);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

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

    setFiltered(result);
  };

  const clearFilter = () => {
    const empty: FilterValues = { title: "", userId: null, body: "" };
    setFilters(empty);
    setFiltered(allPosts);
  };

  const openDashboard = () => setDashboardOpen(true);

  const viewItem = (item: PostItem) => {
    alert(`Viewing: ${item.title}`);
  };

  return (
    <>


      <AdvancedFilters
        filters={filters}
        setFilters={setFilters}
        onApply={applyFilter}
        onClear={clearFilter}
      />

      <AdvancedPostsTable
        data={filtered}
        loading={loading}
        onView={viewItem}
        onOpenDashboard={openDashboard}
      />

      <ApiDashboardDrawer
        open={dashboardOpen}
        onClose={() => setDashboardOpen(false)}
      />


      </>

  );
};

export default Dashboard;
