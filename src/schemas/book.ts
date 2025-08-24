import { z } from "zod";

// Use z.any() instead of z.instanceof(File) for server-side compatibility
export const createBookSchema = z.object({
    title: z.string().min(1),
    imageFile: z.any(),
    pdfFile: z.any(),
    tagId: z.string().min(1),
});

export const updateBookSchema = z.object({
    bookId: z.string().min(1),
    title: z.string().min(1),
    imageFile: z.any().optional(),
    pdfFile: z.any().optional(),
    tagId: z.string().min(1),
});
