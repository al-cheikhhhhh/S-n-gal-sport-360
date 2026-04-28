'use client'

import { useState, useEffect, useMemo } from 'react'
import { Loader2 } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { BreakingNewsTicker } from '@/components/breaking-news-ticker'
import { FilterBar } from '@/components/filter-bar'
import { HeroArticle } from '@/components/hero-article'
import { ArticleCard } from '@/components/article-card'
import { Sidebar } from '@/components/sidebar'
import { Pagination } from '@/components/pagination'
import { SkeletonHero, SkeletonGrid } from '@/components/skeleton-loader'
import { getFallbackData } from '@/lib/fallback-data'
import type { Category, Article, TopInfosData } from '@/lib/types'

const ARTICLES_PER_PAGE = 6

export default function TopInfosPage() {
  const [data, setData] = useState<TopInfosData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState<Category>('tous')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState<'recent' | 'pertinence' | 'categorie'>('recent')
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true)
      // Simulate minimum loading time for better UX
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      // In production, this would call your API
      // For now, we use fallback data
      const fallbackData = getFallbackData()
      setData(fallbackData)
      setIsLoading(false)
    }

    loadData()
  }, [])

  // Handle category change
  const handleCategoryChange = async (category: Category) => {
    setActiveCategory(category)
    setCurrentPage(1)
    setIsLoading(true)
    
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800))
    
    // In production, fetch new data based on category
    const fallbackData = getFallbackData()
    setData(fallbackData)
    setIsLoading(false)
  }

  // Filter and sort articles
  const filteredArticles = useMemo(() => {
    if (!data) return []

    let articles = [...data.articles]

    // Filter by category
    if (activeCategory !== 'tous' && activeCategory !== 'live') {
      articles = articles.filter((a) => a.categorie === activeCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      articles = articles.filter(
        (a) =>
          a.titre.toLowerCase().includes(query) ||
          a.resume.toLowerCase().includes(query) ||
          a.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    // Sort articles
    switch (sortBy) {
      case 'recent':
        // Already sorted by date in fallback data
        break
      case 'pertinence':
        articles.sort((a, b) => {
          const importanceOrder = { une: 0, secondary: 1, tertiary: 2 }
          return importanceOrder[a.importance] - importanceOrder[b.importance]
        })
        break
      case 'categorie':
        articles.sort((a, b) => a.categorie.localeCompare(b.categorie))
        break
    }

    return articles
  }, [data, activeCategory, searchQuery, sortBy])

  // Get articles by importance
  const uneArticle = filteredArticles.find((a) => a.importance === 'une')
  const secondaryArticles = filteredArticles.filter((a) => a.importance === 'secondary')
  const tertiaryArticles = filteredArticles.filter((a) => a.importance === 'tertiary')

  // Pagination
  const totalPages = Math.ceil(tertiaryArticles.length / ARTICLES_PER_PAGE)
  const paginatedArticles = tertiaryArticles.slice(
    (currentPage - 1) * ARTICLES_PER_PAGE,
    currentPage * ARTICLES_PER_PAGE
  )

  // Handle load more
  const handleLoadMore = async () => {
    setIsLoadingMore(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    // In production, this would fetch more articles
    setIsLoadingMore(false)
  }

  return (
    <main role="main" className="min-h-screen bg-black">
      {/* Screen reader only heading */}
      <h1 className="sr-only">Top Infos — Actualités sportives Sénégal Sport 360</h1>

      <Navbar />

      {/* Breaking news ticker */}
      {data && <BreakingNewsTicker articles={data.articles} />}

      {/* Main content - offset for fixed navbar + ticker */}
      <div className="pt-[107px]">
        {/* Filter bar */}
        <FilterBar
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
          articleCount={filteredArticles.length}
        />

        {/* Content area */}
        <div className="max-w-[1400px] mx-auto">
          {isLoading ? (
            <>
              <SkeletonHero />
              <div className="px-4 md:px-6 mt-8">
                <SkeletonGrid />
              </div>
            </>
          ) : (
            <>
              {/* Hero section */}
              <HeroArticle uneArticle={uneArticle} secondaryArticles={secondaryArticles} />

              {/* Main grid section */}
              <section id="toutes-actus" className="px-4 md:px-6 mt-8 pb-8">
                {/* Section header */}
                <div className="flex items-center gap-4 mb-6">
                  <h2
                    className="text-[18px] text-[#39FF14] uppercase shrink-0"
                    style={{ fontFamily: 'var(--font-bebas)' }}
                  >
                    TOUTES LES ACTUALITÉS
                  </h2>
                  <div className="flex-1 h-[1px] bg-white/15" />
                  <span className="text-[12px] text-white/40 shrink-0">
                    {tertiaryArticles.length} articles
                  </span>
                </div>

                {/* Grid layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">
                  {/* Main articles grid */}
                  <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {paginatedArticles.map((article, index) => (
                        <ArticleCard
                          key={article.id}
                          article={article}
                          isLarge={index === 0}
                          index={index}
                        />
                      ))}
                    </div>

                    {/* Load more button */}
                    {tertiaryArticles.length > ARTICLES_PER_PAGE && (
                      <button
                        onClick={handleLoadMore}
                        disabled={isLoadingMore}
                        className="w-full mt-6 py-3.5 rounded-xl text-[#39FF14] font-medium transition-all hover:bg-[#432373]/50 disabled:opacity-50 focus-ring"
                        style={{
                          fontFamily: 'var(--font-bebas)',
                          fontSize: '16px',
                          background: 'rgba(67, 35, 115, 0.3)',
                          border: '1px solid #432373',
                        }}
                      >
                        {isLoadingMore ? (
                          <Loader2 className="w-5 h-5 mx-auto animate-spin text-[#39FF14]" />
                        ) : (
                          'CHARGER PLUS D\'ARTICLES'
                        )}
                      </button>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                      />
                    )}
                  </div>

                  {/* Sidebar */}
                  {data && <Sidebar tendances={data.tendances} />}
                </div>
              </section>
            </>
          )}
        </div>
      </div>

      {/* Offline mode badge (shown when using fallback data) */}
      {data && (
        <div
          className="fixed bottom-4 right-4 px-3 py-1.5 rounded-full text-[11px] text-white/60"
          style={{
            background: 'rgba(67, 35, 115, 0.8)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          Mode démo — Données exemple
        </div>
      )}
    </main>
  )
}
