feature 'viewing the temperature' do

  before do
    visit('/')
  end

  it 'is set to 20 by default' do
    expect(page.find('#temp')).to have_content '20'
  end

  it 'can be raised' do
    page.find('#raise-temp').click
    expect(page.find('#temp')).to have_content '21'
    expect(page).not_to have_content '20'
  end

  it 'can be lowered' do
    page.find('#lower-temp').click
    expect(page.find('#temp')).to have_content '19'
    expect(page).not_to have_content '20'
  end

  it 'can be reset' do
    page.find('#lower-temp').click
    expect(page.find('#temp')).to have_content '19'
    page.find('#reset-temp').click
    expect(page).to have_content '20'
  end

end
