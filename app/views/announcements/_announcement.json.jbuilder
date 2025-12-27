json.extract! announcement, :id, :title, :body, :pinned, :created_at, :updated_at
json.url announcement_url(announcement, format: :json)
