import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, FlatList } from "react-native";
import { FontAwesome6, SimpleLineIcons } from "@expo/vector-icons";
import { PostProps } from "@/interfaces";

export default function PostCard({ post }: PostProps) {
  const [likes, setlikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [shares, setShares] = useState(post.shares);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => setlikes((prev) => prev + 1);
  const handleShare = () => setShares((prev) => prev + 1);
  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment = {
      id: String(comments.length + 1),
      Author: "CurrentUser",
      text: newComment,
      CreatedAt: new Date().toISOString(),
    };
    setComments((prev) => [...prev, comment]);
    setNewComment("");
  };


  return (
    <View style={styles.card}>
      <Text style={styles.author}>{post.author}</Text>
      <Text style={styles.content}>{post.content}</Text>
      <Text style={styles.date}>
        {new Date(post.createdAt).toLocaleString()}
      </Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.button} onPress={handleLike}>
          <SimpleLineIcons name="like" size={17} color="white" />
          <Text style={{ color: "white" }}>{likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setShowComments(true)}>
          <FontAwesome6 name="commenting" size={17} color="white" />
          <Text style={{ color: "white", marginLeft: 6 }}>
            {comments.length}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleShare}>
          <FontAwesome6 name="share" size={17} color="white" />
          <Text style={{ color: "white", marginLeft: 6 }}>{shares}</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={showComments} animationType="slide">
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Comments</Text>

          <FlatList
            data={comments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.commentRow}>
                <Text style={styles.commentAuthor}>{item.author}:</Text>
                <Text style={styles.commentText}>{item.text}</Text>
              </View>
            )}
          />

          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={newComment}
              onChangeText={setNewComment}
              placeholder="Write a comment..."
              placeholderTextColor="gray"
            />
            <TouchableOpacity onPress={handleAddComment}>
              <Text style={styles.addButton}>Post</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => setShowComments(false)}>
            <Text style={styles.closeBtn}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "black",
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
    color: "white",
    fontSize: 18,
    marginBottom: 4,
  },
  content: {
    fontSize: 15,
    color: "white",
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
  modal: {
    flex: 1,
    padding: 16,
    backgroundColor: "black"
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 12,
  },
  commentRow: {
    flexDirection: "row",
    marginBottom: 6,
  },
  commentAuthor: {
    fontWeight: "bold",
    color: "white",
    marginRight: 6,
  },
  commentText: { color: "white", flex: 1 },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 6,
    padding: 8,
    marginRight: 8,
    color: "white",
  },
  addButton: { color: "skyblue", fontWeight: "bold" },
  closeBtn: {
    marginTop: 20,
    textAlign: "center",
    color: "red",
    fontWeight: "bold",
  },
  });
