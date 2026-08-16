import { pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { ulid } from "ulid";

export const cards = pgTable("cards", {
  id: varchar()
    .primaryKey()
    .notNull()
    .$defaultFn(() => ulid()),
  createdAt: timestamp({ withTimezone: true, precision: 0 })
    .notNull()
    .defaultNow(),
  title: varchar().notNull(),
  business: varchar().notNull(),
  status: varchar().notNull(),
  /**
   * analytical
   */
  telegram: varchar(),
  description: varchar(),
  website: varchar(),
});

export const CARD_STATUS = {
  draft: "draft",
  close: "close",
  check: "check",
  taken: "taken",
} as const;

export const BUSINESS = {
  esim_provider: "esim_provider",
  vpn_provider: "vpn_provider",
  ai_media_editor: "ai_media_editor",
};

export const BUSINESS_TARGET = {
  // ========== VERTICAL 1: SaaS-инструменты для бизнеса (10) ==========
  project_management: "project_management",
  time_tracking: "time_tracking",
  invoice_generator: "invoice_generator",
  employee_onboarding: "employee_onboarding",
  task_automation: "task_automation",
  document_signing: "document_signing",
  client_portal: "client_portal",
  meeting_scheduler: "meeting_scheduler",
  feedback_collector: "feedback_collector",
  expense_reporter: "expense_reporter",

  // ========== VERTICAL 2: ИИ-генерация контента (6) ==========
  ai_article_writer: "ai_article_writer",
  ai_image_generator: "ai_image_generator",
  ai_voiceover_maker: "ai_voiceover_maker",
  ai_blog_idea_generator: "ai_blog_idea_generator",
  ai_email_writer: "ai_email_writer",
  ai_translation_tool: "ai_translation_tool",

  // ========== VERTICAL 3: Маркетинговые и рекламные инструменты (7) ==========
  ad_creative_generator: "ad_creative_generator",
  competitor_ad_spy: "competitor_ad_spy",
  google_ads_optimizer: "google_ads_optimizer",
  influencer_search_engine: "influencer_search_engine",
  brand_mention_monitor: "brand_mention_monitor",
  seo_rank_tracker: "seo_rank_tracker",
  ad_copywriter_ai: "ad_copywriter_ai",

  // ========== VERTICAL 4: Онлайн-образование и курсы (8) ==========
  marketing_course_platform: "marketing_course_platform",
  design_course_hub: "design_course_hub",
  programming_school: "programming_school",
  copywriting_skills_training: "copywriting_skills_training",
  video_content_academy: "video_content_academy",
  social_media_strategy_hub: "social_media_strategy_hub",
  seo_training_center: "seo_training_center",
  ai_skills_training: "ai_skills_training",

  // ========== VERTICAL 5: Дизайн и творческие сервисы (7) ==========
  logo_maker_ai: "logo_maker_ai",
  mockup_generator: "mockup_generator",
  presentation_designer: "presentation_designer",
  social_media_post_designer: "social_media_post_designer",
  flyer_creator: "flyer_creator",
  business_card_maker: "business_card_maker",
  infographic_builder: "infographic_builder",

  // ========== VERTICAL 6: Облачные хранилища и коллаборация (8) ==========
  team_file_storage: "team_file_storage",
  collaborative_document_editor: "collaborative_document_editor",
  cloud_backup_service: "cloud_backup_service",
  media_asset_management: "media_asset_management",
  client_file_sharing: "client_file_sharing",
  team_wiki_knowledge_base: "team_wiki_knowledge_base",
  real_time_collaboration_board: "real_time_collaboration_board",
  digital_asset_library: "digital_asset_library",

  // ========== VERTICAL 7: Аналитика и данные (7) ==========
  website_analytics_dashboard: "website_analytics_dashboard",
  sales_reporting_tool: "sales_reporting_tool",
  customer_behavior_analytics: "customer_behavior_analytics",
  market_research_reports: "market_research_reports",
  conversion_funnel_analyzer: "conversion_funnel_analyzer",
  competitor_analysis_tool: "competitor_analysis_tool",
  ad_spy_analytics: "ad_spy_analytics",

  // ========== VERTICAL 8: Коммуникация и CRM (7) ==========
  live_chat_widget: "live_chat_widget",
  client_relationship_tracker: "client_relationship_tracker",
  whatsapp_business_api_tool: "whatsapp_business_api_tool",
  sms_marketing_platform: "sms_marketing_platform",
  multi_channel_inbox: "multi_channel_inbox",
  callback_request_service: "callback_request_service",
  email_marketing_autoresponder: "email_marketing_autoresponder",

  // ========== VERTICAL 9: HR и рекрутинг (6) ==========
  employee_assessment_tool: "employee_assessment_tool",
  candidate_ranking_ai: "candidate_ranking_ai",
  recruitment_ats_system: "recruitment_ats_system",
  skill_testing_system: "skill_testing_system",
  team_building_scheduler: "team_building_scheduler",
  video_interview_platform: "video_interview_platform",

  // ========== VERTICAL 10: Здоровье и саморазвитие (цифровое) (6) ==========
  meditation_app_premium: "meditation_app_premium",
  habit_tracker_planner: "habit_tracker_planner",
  fitness_workout_planner: "fitness_workout_planner",
  sleep_quality_analyzer: "sleep_quality_analyzer",
  journaling_diary_app: "journaling_diary_app",
  productivity_timer_focus: "productivity_timer_focus",
};
