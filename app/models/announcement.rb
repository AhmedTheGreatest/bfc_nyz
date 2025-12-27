class Announcement < ApplicationRecord
  has_rich_text :body

  validates :title, :body, presence: true

  default_scope -> { order(pinned: :desc, created_at: :desc) }
end
