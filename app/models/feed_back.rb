class FeedBack < ActiveRecord::Base
  validates_presence_of :message

  after_save :send_email

  def send_email
    MainMailer.feedback(self).deliver
  end
end
