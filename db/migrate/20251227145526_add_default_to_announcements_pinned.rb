class AddDefaultToAnnouncementsPinned < ActiveRecord::Migration[8.1]
  def change
    change_column_default :announcements, :pinned, false
  end
end
