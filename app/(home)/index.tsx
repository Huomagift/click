import Loader from "@/components/Loader";
import PostCard from "@/components/PostCard";
import { Post } from "@/interfaces";
import "@/styles/global.css";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


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
          content: "Just pushed my first commit for Click ",
          createdAt: "2025-09-13T20:00:00Z",
          likes: 10,
          comments: [],
          shares: 2,
        },
        {
          id: "2",
          author: "Amadi",
          content: "Learning how to structure queries with GraphQL",
          createdAt: "2025-09-13T21:00:00Z",
          likes: 5,
          comments: [],
          shares: 1,
        },
        {
          id: "3",
          author: "Gift",
          content: "UI design is coming together — clean and minimal",
          createdAt: "2025-09-14T09:30:00Z",
          likes: 8,
          comments: [],
          shares: 3,
        },
        {
          id: "4",
          author: "Amadi",
          content: "Fixed a deployment bug after hours of debugging",
          createdAt: "2025-09-14T10:15:00Z",
          likes: 6,
          comments: [],
          shares: 0,
        },
        {
          id: "5",
          author: "Gift",
          content: "GraphQL API is finally rendering posts correctly",
          createdAt: "2025-09-14T12:00:00Z",
          likes: 12,
          comments: [],
          shares: 4,
        },
        {
          id: "6",
          author: "Amadi",
          content: "Experimenting with styling options for the feed",
          createdAt: "2025-09-14T13:00:00Z",
          likes: 7,
          comments: [],
          shares: 1,
        },
        {
          id: "7",
          author: "Gift",
          content: "Notifications feature drafted — simple and clutter-free",
          createdAt: "2025-09-14T14:30:00Z",
          likes: 9,
          comments: [],
          shares: 2,
        },
        {
          id: "8",
          author: "Amadi",
          content: "Testing repost functionality — works in one click",
          createdAt: "2025-09-14T15:00:00Z",
          likes: 5,
          comments: [],
          shares: 1,
        },
        {
          id: "9",
          author: "Gift",
          content: "Core features lined up: posts, profiles, notifications",
          createdAt: "2025-09-14T16:30:00Z",
          likes: 11,
          comments: [],
          shares: 2,
        },
        {
          id: "10",
          author: "Prince",
          content: "Shared the demo with friends — great feedback so far",
          createdAt: "2025-09-14T18:00:00Z",
          likes: 4,
          comments: [],
          shares: 9,
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
    backgroundColor: "#D8C9AE",
  },
});
