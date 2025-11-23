import {
  customerBasicDetailsSchema,
  FormField,
} from "@/shared/schemas/customerBasicDetailsSchema";

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";

interface FormData {
  [key: string]: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function CustomerBasicDetailsForm() {
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = (field: FormField, value: string): string => {
    if (field.required && !value?.trim()) {
      return `${field.label} is required`;
    }

    if (value && field.validation) {
      const { pattern, minLength, maxLength, min, message } = field.validation;

      if (pattern && !new RegExp(pattern).test(value)) {
        return message || `Invalid ${field.label}`;
      }

      if (minLength && value.length < minLength) {
        return message || `Minimum ${minLength} characters required`;
      }

      if (maxLength && value.length > maxLength) {
        return message || `Maximum ${maxLength} characters allowed`;
      }

      if (min !== undefined && Number(value) < min) {
        return message || `Minimum value is ${min}`;
      }
    }

    return "";
  };

  const handleChange = (fieldId: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldId]: value }));
    if (errors[fieldId]) {
      setErrors((prev) => ({ ...prev, [fieldId]: "" }));
    }
  };

  const handleSubmit = () => {
    const newErrors: FormErrors = {};

    customerBasicDetailsSchema.forEach((field) => {
      const error = validateField(field, formData[field.id] || "");
      if (error) {
        newErrors[field.id] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      Alert.alert(
        "Validation Error",
        "Please fix all errors before submitting"
      );
      return;
    }

    Alert.alert("Success", "Customer details saved!");
    console.log("Form Data:", formData);
  };

  const renderRadioGroup = (field: FormField) => (
    <View key={field.id} style={styles.fieldContainer}>
      <Text style={styles.label}>
        {field.label}
        {field.required && <Text style={styles.required}> *</Text>}
      </Text>

      <View style={styles.radioGroup}>
        {field.options?.map((opt) => (
          <TouchableOpacity
            key={opt.value}
            style={styles.radioOption}
            onPress={() => handleChange(field.id, opt.value)}
          >
            <View
              style={[
                styles.radioCircle,
                formData[field.id] === opt.value && styles.radioSelected,
              ]}
            />
            <Text style={styles.radioLabel}>{opt.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {errors[field.id] && (
        <Text style={styles.errorText}>{errors[field.id]}</Text>
      )}
    </View>
  );

  const renderInput = (field: FormField) => {
    if (field.type === "radio") return renderRadioGroup(field);

    const keyboardType =
      field.type === "email"
        ? "email-address"
        : field.type === "phone" || field.type === "number"
        ? "numeric"
        : "default";

    return (
      <View key={field.id} style={styles.fieldContainer}>
        <Text style={styles.label}>
          {field.label}
          {field.required && <Text style={styles.required}> *</Text>}
        </Text>

        <TextInput
          style={[styles.input, errors[field.id] && styles.inputError]}
          placeholder={field.placeholder}
          value={formData[field.id] || ""}
          onChangeText={(value) => handleChange(field.id, value)}
          keyboardType={keyboardType}
          autoCapitalize={field.type === "email" ? "none" : "words"}
        />

        {errors[field.id] && (
          <Text style={styles.errorText}>{errors[field.id]}</Text>
        )}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Customer Basic Details</Text>

      {customerBasicDetailsSchema.map((field) => renderInput(field))}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  fieldContainer: { marginBottom: 16 },
  label: { fontSize: 14, fontWeight: "600", marginBottom: 6 },
  required: { color: "red" },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  inputError: { borderColor: "red" },
  errorText: { color: "red", fontSize: 12, marginTop: 4 },

  /** RADIO STYLES **/
  radioGroup: {
    flexDirection: "row",
    gap: 20,
    marginTop: 4,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#444",
    marginRight: 6,
  },
  radioSelected: {
    backgroundColor: "#2196F3",
    borderColor: "#2196F3",
  },
  radioLabel: { fontSize: 14 },

  button: {
    backgroundColor: "#2196F3",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});

// import {
//   customerBasicDetailsSchema,
//   FormField,
// } from "@/shared/schemas/customerBasicDetailsSchema";
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
//   Alert,
// } from "react-native";

// interface FormData {
//   [key: string]: string;
// }

// interface FormErrors {
//   [key: string]: string;
// }

// export default function CustomerBasicDetailsForm() {
//   const [formData, setFormData] = useState<FormData>({});
//   const [errors, setErrors] = useState<FormErrors>({});

//   const validateField = (field: FormField, value: string): string => {
//     if (field.required && !value.trim()) {
//       return `${field.label} is required`;
//     }

//     if (value && field.validation) {
//       const { pattern, minLength, maxLength, min, message } = field.validation;

//       if (pattern && !new RegExp(pattern).test(value)) {
//         return message || `Invalid ${field.label}`;
//       }

//       if (minLength && value.length < minLength) {
//         return message || `Minimum ${minLength} characters required`;
//       }

//       if (maxLength && value.length > maxLength) {
//         return message || `Maximum ${maxLength} characters allowed`;
//       }

//       if (min !== undefined && Number(value) < min) {
//         return message || `Minimum value is ${min}`;
//       }
//     }

//     return "";
//   };

//   const handleChange = (fieldId: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [fieldId]: value }));

//     // Clear error when user starts typing
//     if (errors[fieldId]) {
//       setErrors((prev) => ({ ...prev, [fieldId]: "" }));
//     }
//   };

//   const handleSubmit = () => {
//     const newErrors: FormErrors = {};

//     // Validate all fields
//     customerBasicDetailsSchema.forEach((field) => {
//       const error = validateField(field, formData[field.id] || "");
//       if (error) {
//         newErrors[field.id] = error;
//       }
//     });

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       Alert.alert(
//         "Validation Error",
//         "Please fix all errors before submitting"
//       );
//       return;
//     }

//     // Success - Submit form
//     console.log("Form Data:", formData);
//     Alert.alert("Success", "Customer details saved successfully!");
//   };

//   const renderInput = (field: FormField) => {
//     const keyboardType =
//       field.type === "email"
//         ? "email-address"
//         : field.type === "phone" || field.type === "number"
//         ? "numeric"
//         : "default";

//     return (
//       <View key={field.id} style={styles.fieldContainer}>
//         <Text style={styles.label}>
//           {field.label}
//           {field.required && <Text style={styles.required}> *</Text>}
//         </Text>

//         <TextInput
//           style={[styles.input, errors[field.id] && styles.inputError]}
//           placeholder={field.placeholder}
//           value={formData[field.id] || ""}
//           onChangeText={(value) => handleChange(field.id, value)}
//           keyboardType={keyboardType}
//           autoCapitalize={field.type === "email" ? "none" : "words"}
//         />

//         {errors[field.id] && (
//           <Text style={styles.errorText}>{errors[field.id]}</Text>
//         )}
//       </View>
//     );
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Customer Basic Details</Text>

//       {customerBasicDetailsSchema.map((field) => renderInput(field))}

//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Submit</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#fff",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     color: "#333",
//   },
//   fieldContainer: {
//     marginBottom: 16,
//   },
//   label: {
//     fontSize: 14,
//     fontWeight: "600",
//     marginBottom: 6,
//     color: "#333",
//   },
//   required: {
//     color: "#f44336",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 8,
//     padding: 12,
//     fontSize: 16,
//     backgroundColor: "#fff",
//   },
//   inputError: {
//     borderColor: "#f44336",
//   },
//   errorText: {
//     color: "#f44336",
//     fontSize: 12,
//     marginTop: 4,
//   },
//   button: {
//     backgroundColor: "#2196F3",
//     padding: 16,
//     borderRadius: 8,
//     alignItems: "center",
//     marginTop: 10,
//     marginBottom: 30,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
// });
