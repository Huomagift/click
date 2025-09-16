import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Post = {
  id: string;
  author: string;
  content: string;
  createdAt: string;
};

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.author}>{post.author}</Text>
      <Text style={styles.content}>{post.content}</Text>
      <Text style={styles.date}>
        {new Date(post.createdAt).toLocaleString()}
      </Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}>
          <Text>👍 Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>💬 Comment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  author: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
  },
  content: {
    fontSize: 14,
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: "gray",
    marginBottom: 12,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    padding: 6,
  },
});
