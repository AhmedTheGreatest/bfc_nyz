class PagesController < ApplicationController
  allow_unauthenticated_access

  def home
  end

  def about
  end

  def academics
  end

  def facilities
  end

  def contact
  end

  def submit_contact
    # grab form data
    name = params[:name]
    email = params[:email]
    message = params[:message]

    # for now, just log it
    Rails.logger.info "Contact form submitted: #{name}, #{email}, #{message}"

    # optionally, send an email here using ActionMailer

    # flash notice and redirect back
    flash[:notice] = "Thank you for contacting us! We'll get back to you soon."
    redirect_to contact_path
  end
end
