import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  ActivityIndicator,
  Linking,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const HomeScreen = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      base64: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].base64!);
    }
  };

  const uploadImage = async () => {
    if (!selectedImage) {
      Alert.alert("No Image Selected", "Please select an image first.");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8081/api/upload", {
        method: "POST",
        body: JSON.stringify({ image: selectedImage }),
      });

      const data = await response.json();
      if (response.ok) {
        Alert.alert("Upload Successful", "Image has been uploaded.");
        setLoading(false);
        setResponse(data);
        console.log("Response:", data);
      } else {
        setLoading(false);
        Alert.alert("Upload Failed", data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      Alert.alert("Upload Failed", "Network error occurred.");
    }
  };

  const redirectToWebViewer = () => {
    const modelUrl = `${process.env.EXPO_PUBLIC_EXTERNAL_WEBSITE}`;
    console.log("Redirecting to:", modelUrl);
    Linking.openURL(modelUrl);
  };

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#4F46E5" />
        <Text className="text-xl font-semibold mt-4 text-indigo-600">
          Loading, Please Wait...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container} data-theme="forest">
      <Text className="text-2xl font-bold mb-4 text-center">
        Upload 2D Image
      </Text>

      {selectedImage && (
        <Image
          source={{ uri: "data:image/jpeg;base64," + selectedImage }}
          style={styles.imagePreview}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text className="font-semibold text-white">Choose Image</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
        <Text className="font-semibold text-white">Upload Image</Text>
      </TouchableOpacity>
      {response && (
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text className="text-xl mb-6 uppercase text-center font-semibold">
            3D Model
          </Text>
          <TouchableOpacity
            style={styles.downloadButton}
            onPress={() => redirectToWebViewer()}
          >
            <Text style={styles.downloadText}>View in 3D (GLB)</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  uploadButton: {
    backgroundColor: "#4285F4",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
  },
  imagePreview: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  downloadButton: {
    backgroundColor: "#6B7280",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
    marginBottom: 10,
  },
  downloadText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default HomeScreen;
