class Announcement < ApplicationRecord
  validates :title, :body, presence: true

  default_scope -> { order(pinned: :desc, created_at: :desc) }
end
