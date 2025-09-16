import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PostCard from "@/components/PostCard";
import Loader from "@/components/Loader";
import "@/styles/global.css"

type Post = {
  id: string;
  author: string;
  content: string;
  createdAt: string;
};

export default function HomeFeed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock fetching posts 
    setTimeout(() => {
      setPosts([
        {
          id: "1",
          author: "Gift",
          content: "Excited to start building this app 🎉",
          createdAt: "2025-09-13T20:00:00Z",
        },
        {
          id: "2",
          author: "Amadi",
          content: "GraphQL setup coming next 👩🏽‍💻",
          createdAt: "2025-09-13T21:00:00Z",
        },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) return <Loader />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
