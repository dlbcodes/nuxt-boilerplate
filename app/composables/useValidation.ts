import { z, type ZodSchema, ZodError } from "zod";

interface ValidationErrors {
	[key: string]: string;
}

/**
 * A composable for form validation using Zod.
 * @param {ZodSchema} schema - The Zod schema to validate the form data against.
 * @returns {Object} - Contains the errors ref, validate function, and resetErrors function.
 */
export default function useValidation<T>(schema: ZodSchema<T>) {
	const errors: Ref<ValidationErrors> = ref({});

	/**
	 * Validate the form data against the provided Zod schema.
	 * @param {Object} data - The form data to validate.
	 * @returns {boolean} - Returns true if validation is successful, otherwise false.
	 */
	const validate = (data: T): boolean => {
		try {
			schema.parse(data);
			errors.value = {};
			return true;
		} catch (e) {
			if (e instanceof ZodError) {
				const formattedErrors: ValidationErrors = {};
				e.errors.forEach((error) => {
					const path = error.path[0] as string;
					formattedErrors[path] = error.message;
				});
				errors.value = formattedErrors;
			}
			return false;
		}
	};

	/**
	 * Reset the validation errors.
	 */
	const resetErrors = () => {
		errors.value = {};
	};

	return {
		errors,
		validate,
		resetErrors,
	};
}
