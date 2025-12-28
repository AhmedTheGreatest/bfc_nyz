module AnnouncementsHelper
  def announcement_excerpt(rich_text, length: 160)
    html = rich_text.to_s

    # Remove single attachments
    html = html.gsub(
      /<action-text-attachment[\s\S]*?<\/action-text-attachment>/,
      ""
    )

    # Remove attachment galleries
    html = html.gsub(
      /<div class="attachment-gallery"[\s\S]*?<\/div>/,
      ""
    )

    # Remove empty paragraphs left behind
    html = html.gsub(/<p>\s*<\/p>/, "")

    # Strip remaining HTML
    text = strip_tags(html).squish

    truncate(text, length: length)
  end
end
