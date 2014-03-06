class CreateFeedBacks < ActiveRecord::Migration
  def change
    create_table :feed_backs do |t|
      t.string :name
      t.string :email
      t.text :message

      t.timestamps
    end
  end
end
