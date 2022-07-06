import { useCallback } from "react";
import { Button, Linking } from "react-native";

const OpenURLButton = ({ style, url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Este link no se puede abrir: ${url}`);
    }
  }, [url]);

  return (
    <Button
      style={{
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor:"black",
        minHeight: 42,
        borderRadius: 40,
        paddingHorizontal: 12,
        paddingVertical: 12,
        margin: 7,
      }}
      title={children}
      onPress={handlePress}
    />
  );
};

export default OpenURLButton;
