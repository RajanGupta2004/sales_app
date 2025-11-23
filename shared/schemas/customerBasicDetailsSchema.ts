// // shared/schemas/customerBasicDetailsSchema.ts

export interface FormField {
  id: string;
  label: string;
  placeholder?: string;
  type: "text" | "email" | "phone" | "number" | "date" | "radio";
  required: boolean;
  options?: { label: string; value: string }[]; // For radio buttons
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
    message?: string;
  };
}

export const customerBasicDetailsSchema: FormField[] = [
  {
    id: "fullName",
    label: "Full Name",
    placeholder: "Enter full name",
    type: "text",
    required: true,
    validation: {
      minLength: 2,
      maxLength: 100,
      message: "Name must be between 2 and 100 characters",
    },
  },
  {
    id: "gender",
    label: "Gender",
    type: "radio",
    required: true,
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Other", value: "other" },
    ],
    validation: {
      message: "Please select gender",
    },
  },
  {
    id: "email",
    label: "Email Address",
    placeholder: "Enter email address",
    type: "email",
    required: true,
    validation: {
      pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
      message: "Please enter a valid email address",
    },
  },
  {
    id: "phone",
    label: "Phone Number",
    placeholder: "Enter phone number",
    type: "phone",
    required: true,
    validation: {
      pattern: "^[0-9]{10}$",
      message: "Please enter a valid 10-digit phone number",
    },
  },
  {
    id: "dateOfBirth",
    label: "Date of Birth",
    placeholder: "DD/MM/YYYY",
    type: "date",
    required: true,
    validation: {
      message: "Please enter a valid date",
    },
  },
  {
    id: "address",
    label: "Address",
    placeholder: "Enter address",
    type: "text",
    required: true,
    validation: {
      minLength: 5,
      maxLength: 200,
      message: "Address must be between 5 and 200 characters",
    },
  },
  {
    id: "pincode",
    label: "Pincode",
    placeholder: "Enter pincode",
    type: "number",
    required: true,
    validation: {
      pattern: "^[0-9]{6}$",
      message: "Please enter a valid 6-digit pincode",
    },
  },
  {
    id: "annualIncome",
    label: "Annual Income",
    placeholder: "Enter annual income",
    type: "number",
    required: false,
    validation: {
      min: 0,
      message: "Income must be a positive number",
    },
  },
];

// export interface FormField {
//   id: string;
//   label: string;
//   placeholder: string;
//   type: "text" | "email" | "phone" | "number" | "date";
//   required: boolean;
//   validation?: {
//     pattern?: string;
//     minLength?: number;
//     maxLength?: number;
//     min?: number;
//     max?: number;
//     message?: string;
//   };
// }

// export const customerBasicDetailsSchema: FormField[] = [
//   {
//     id: "fullName",
//     label: "Full Name",
//     placeholder: "Enter full name",
//     type: "text",
//     required: true,
//     validation: {
//       minLength: 2,
//       maxLength: 100,
//       message: "Name must be between 2 and 100 characters",
//     },
//   },
//   {
//     id: "email",
//     label: "Email Address",
//     placeholder: "Enter email address",
//     type: "email",
//     required: true,
//     validation: {
//       pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
//       message: "Please enter a valid email address",
//     },
//   },
//   {
//     id: "phone",
//     label: "Phone Number",
//     placeholder: "Enter phone number",
//     type: "phone",
//     required: true,
//     validation: {
//       pattern: "^[0-9]{10}$",
//       message: "Please enter a valid 10-digit phone number",
//     },
//   },
//   {
//     id: "dateOfBirth",
//     label: "Date of Birth",
//     placeholder: "DD/MM/YYYY",
//     type: "date",
//     required: true,
//     validation: {
//       message: "Please enter a valid date",
//     },
//   },
//   {
//     id: "address",
//     label: "Address",
//     placeholder: "Enter address",
//     type: "text",
//     required: true,
//     validation: {
//       minLength: 5,
//       maxLength: 200,
//       message: "Address must be between 5 and 200 characters",
//     },
//   },
//   {
//     id: "pincode",
//     label: "Pincode",
//     placeholder: "Enter pincode",
//     type: "number",
//     required: true,
//     validation: {
//       pattern: "^[0-9]{6}$",
//       message: "Please enter a valid 6-digit pincode",
//     },
//   },
//   {
//     id: "annualIncome",
//     label: "Annual Income",
//     placeholder: "Enter annual income",
//     type: "number",
//     required: false,
//     validation: {
//       min: 0,
//       message: "Income must be a positive number",
//     },
//   },
// ];
