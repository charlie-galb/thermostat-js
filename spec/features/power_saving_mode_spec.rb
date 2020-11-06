feature 'power-saving mode' do
  before do
    visit('/')
  end

  it 'is on by default' do
    expect(page.find('#power-saving-status')).to have_content 'on'
  end

  it 'can be switched off' do
    page.find('#powersaving-off').click
    expect(page.find('#power-saving-status')).to have_content 'off'
  end

  it 'can be switched back on' do
    page.find('#powersaving-off').click
    expect(page.find('#power-saving-status')).to have_content 'off'
    page.find('#powersaving-on').click
    expect(page.find('#power-saving-status')).to have_content 'on'
  end

  context 'power-saving mode is on' do
    it 'has a max temp of 25' do
      6.times do
        page.find('#raise-temp').click
      end
      expect(page.find('#temp')).to have_content 25
    end
  end

  context 'power-saving mode is off' do
    it 'has a max temp of 32' do
      page.find('#powersaving-off').click
      13.times do
        page.find('#raise-temp').click
      end
      expect(page.find('#temp')).to have_content 32
    end
  end
end
