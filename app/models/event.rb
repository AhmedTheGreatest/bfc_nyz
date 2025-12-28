class Event < ApplicationRecord
  has_many_attached :photos

  validates :title, :date, presence: true
end
