class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :name_for_menu
      t.string :title
      t.string :anchor
      t.text :content
      t.integer :number

      t.timestamps
    end
  end
end
