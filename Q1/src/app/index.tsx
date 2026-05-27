import React from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Counter() {
const [count, setCount] = useState(0);

const increment = () => setCount((c) => c + 1);
const decrement = () => setCount((c) => Math.max(0, c - 1));

return (
<View style={styles.page}>
<View style={styles.card}>
<Text style={styles.label}>CONTADOR</Text>

<Text style={[styles.number, count > 10 && styles.numberRed]}>
{count}
</Text>

{count > 10 && (
<Text style={styles.warning}>LIMITE EXCEDIDO</Text>
)}

<View style={styles.controls}>
<TouchableOpacity
style={[styles.btn, count === 0 && styles.btnDisabled]}
onPress={decrement}
disabled={count === 0}
accessibilityLabel="Decrementar"
>
<Text style={[styles.btnText, count === 0 && styles.btnTextDisabled]}>
−
</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.btn}
onPress={increment}
accessibilityLabel="Incrementar"
>
<Text style={styles.btnText}>+</Text>
</TouchableOpacity>
</View>
</View>
</View>
);
}

const styles = StyleSheet.create({
page: {
flex: 1,
alignItems: "center",
justifyContent: "center",
backgroundColor: "#0f0f0f",
},
card: {
alignItems: "center",
gap: 24,
paddingVertical: 48,
paddingHorizontal: 64,
backgroundColor: "#1a1a1a",
borderWidth: 1,
borderColor: "#2e2e2e",
borderRadius: 4,
},
label: {
fontSize: 11,
letterSpacing: 4,
color: "#555",
fontFamily: "monospace",
},
number: {
fontSize: 96,
fontWeight: "700",
color: "#f0f0f0",
minWidth: 160,
textAlign: "center",
fontFamily: "monospace",
},
numberRed: {
color: "#e53935",
},
warning: {
fontSize: 11,
letterSpacing: 2,
color: "#e53935",
fontFamily: "monospace",
},
controls: {
flexDirection: "row",
gap: 16,
alignItems: "center",
},
btn: {
width: 52,
height: 52,
borderRadius: 4,
borderWidth: 1,
borderColor: "#333",
alignItems: "center",
justifyContent: "center",
},
btnDisabled: {
borderColor: "#222",
},
btnText: {
color: "#aaa",
fontSize: 28,
lineHeight: 32,
fontFamily: "monospace",
},
btnTextDisabled: {
color: "#333",
},
});