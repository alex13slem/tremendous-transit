import { z } from "astro/zod";
import { invalidText } from "../utils/errors";
import regex from "../utils/regex";

/**
 * Blogers Form Schema
 */

export const blogersFormSchema = z.object({
  botFlaggedSpam: z.boolean().optional(),
  access: z.boolean({
    required_error: invalidText["REQUIRED"],
    invalid_type_error: invalidText["REQUIRED"],
  }),
  name: z
    .string({
      required_error: invalidText["REQUIRED"],
      invalid_type_error: invalidText["REQUIRED"],
    })
    .min(2, invalidText["NAME_MIN"]),
  email: z
    .string({
      required_error: invalidText["REQUIRED"],
      invalid_type_error: invalidText["REQUIRED"],
    })
    .email(invalidText["EMAIL"]),
  fromLink: z
    .string({
      required_error: invalidText["REQUIRED"],
      invalid_type_error: invalidText["REQUIRED"],
    })
    .regex(regex.URL, invalidText["URL"]),
  contact: z.string().optional(),
  comment: z.string().optional(),
});
export type BlogersFormSchema = z.infer<typeof blogersFormSchema>;

/**
 * Publishing Form Schema
 */

export const publishingFormSchema = z.object({
  botFlaggedSpam: z.boolean().optional(),

  access: z.object({
    secure: z.boolean({
      required_error: invalidText["REQUIRED"],
      invalid_type_error: invalidText["REQUIRED"],
    }),
    user: z.boolean({
      required_error: invalidText["REQUIRED"],
      invalid_type_error: invalidText["REQUIRED"],
    }),
  }),

  name: z
    .string({
      required_error: invalidText["REQUIRED"],
      invalid_type_error: invalidText["REQUIRED"],
    })
    .min(2, invalidText["NAME_MIN"]),

  email: z
    .string({
      required_error: invalidText["REQUIRED"],
      invalid_type_error: invalidText["REQUIRED"],
    })
    .email(invalidText["EMAIL"]),

  linkPreview: z.string().regex(regex.URL, invalidText["URL"]).nullish(),

  linkBuild: z
    .string({
      required_error: invalidText["REQUIRED"],
      invalid_type_error: invalidText["REQUIRED"],
    })
    .regex(regex.URL, invalidText["URL"]),

  info: z
    .string({
      required_error: invalidText["REQUIRED"],
      invalid_type_error: invalidText["REQUIRED"],
    })
    .min(30, invalidText["DESCRIPTION_MIN"]),

  selectedDir: z.string({
    required_error: invalidText["REQUIRED"],
    invalid_type_error: invalidText["REQUIRED"],
  }),
});
export type PublishingFormSchema = z.infer<typeof publishingFormSchema>;

/**
 * Services Form Schema
 */

export const servicesFormSchema = z.object({
  botFlaggedSpam: z.boolean().optional(),
  access: z.boolean({
    required_error: invalidText["REQUIRED"],
    invalid_type_error: invalidText["REQUIRED"],
  }),
  name: z
    .string({
      required_error: invalidText["REQUIRED"],
      invalid_type_error: invalidText["REQUIRED"],
    })
    .min(2, invalidText["NAME_MIN"]),
  email: z
    .string({
      required_error: invalidText["REQUIRED"],
      invalid_type_error: invalidText["REQUIRED"],
    })
    .email(invalidText["EMAIL"]),
  info: z.string().min(30, invalidText["DESCRIPTION_MIN"]).nullish(),
  selectedService: z.string({
    required_error: invalidText["REQUIRED"],
    invalid_type_error: invalidText["REQUIRED"],
  }),
});
export type ServicesFormSchema = z.infer<typeof servicesFormSchema>;
