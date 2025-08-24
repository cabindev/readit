"use server";

import prisma from "../../prisma";

// Mock data for build time
const mockBook = {
    id: 'build-time-mock',
    title: 'Loading...',
    imageUrl: '/placeholder-book.jpg',
    pdfUrl: '/placeholder.pdf',
    views: 0,
    rating: 0,
    tagId: 'mock-tag',
    createdAt: new Date(),
    updatedAt: new Date(),
    tag: {
        id: 'mock-tag',
        title: 'Loading...',
        createdAt: new Date(),
        updatedAt: new Date()
    }
};

// Helper function to check if we're in build mode
const isBuildTime = () => {
    return process.env.NODE_ENV === 'production' && 
           (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes('placeholder'));
};

export async function getBooks() {
    if (isBuildTime()) {
        return [mockBook];
    }
    const books = await prisma.book.findMany({ orderBy: { views: "asc" } });
    return books;
}

export async function getBooksWithPagination({
    page,
    search,
}: {
    page: number;
    search: string;
}) {
    const pageInt = Number(page);
    const limitInt = 10;

    const books = await prisma.book.findMany({
        where: { OR: [{ title: { contains: search } }] },
        skip: (pageInt - 1) * limitInt,
        take: limitInt,
        orderBy: { createdAt: "desc" },
    });

    const totalCount = await prisma.book.count({
        where: { OR: [{ title: { contains: search } }] },
    });

    return {
        books,
        totalPages: Math.ceil(totalCount / limitInt),
        currentPage: pageInt,
        totalCount,
    };
}

export async function getBookById({ id }: { id: string }) {
    if (isBuildTime()) {
        return mockBook;
    }
    const book = await prisma.book.findUnique({ 
        where: { id },
        include: { tag: true }
    });
    return book;
}

export async function getBooksByTagId({ id }: { id: string }) {
    const books = await prisma.book.findMany({
        where: { tagId: id },
        orderBy: { views: "asc" },
    });
    return books;
}

export async function getPopularBooks(limit: number = 8) {
    const books = await prisma.book.findMany({
        orderBy: { views: "desc" },
        take: limit,
    });
    return books;
}

export async function getRecentBooks(limit: number = 6) {
    const books = await prisma.book.findMany({
        orderBy: { createdAt: "desc" },
        take: limit,
    });
    return books;
}

export async function getBooksStats() {
    const totalBooks = await prisma.book.count();
    const totalViews = await prisma.book.aggregate({
        _sum: { views: true },
    });
    return {
        totalBooks,
        totalViews: totalViews._sum.views || 0,
    };
}
