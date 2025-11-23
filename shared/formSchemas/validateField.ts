export function validateField(value: any, rules: any) {
  if (!rules) return null;

  // Required
  if (rules.required && (!value || value.toString().trim() === "")) {
    return rules.errorMessage || "This field is required";
  }

  // Min Length
  if (rules.minLength && value.length < rules.minLength) {
    return rules.errorMessage;
  }

  // Max Length
  if (rules.maxLength && value.length > rules.maxLength) {
    return rules.errorMessage;
  }

  // Min Value
  if (rules.min && Number(value) < rules.min) {
    return rules.errorMessage;
  }

  // Max Value
  if (rules.max && Number(value) > rules.max) {
    return rules.errorMessage;
  }

  // Regex
  if (rules.regex) {
    const regex = new RegExp(rules.regex);
    if (!regex.test(value)) {
      return rules.errorMessage;
    }
  }

  return null;
}
