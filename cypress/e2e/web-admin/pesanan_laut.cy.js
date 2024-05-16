describe('buat pesanan laut', () => {
  //Author : Esmeralda Wangsa
  
  it('buat pesanan laut', () => {
      // Langkah 1: Melakukan konfigurasi tampilan viewport
      cy.viewport(1200, 800);
      
      // Langkah 2: Mengunjungi halaman web yang ingin ditest
      cy.visit('URL');
      
      // Langkah 3: Melakukan login dengan email dan password
      cy.get('input[placeholder="Silahkan masukan Email"]').type('email');
      cy.get('input[placeholder="Silahkan masukan Password"]').type('password');
      cy.get('button.MuiButton-containedPrimary').click();
      
      // Langkah 4: Menunggu halaman muncul setelah login
      cy.wait(7000);
      
      // Langkah 5: Mencari Pesanan Laut
      cy.get('input[placeholder="Cari Page,ID Order,ID Trip"]').type('Pesanan Laut{enter}');
      cy.wait(25000);
      
      // Langkah 6: Klik tombol untuk membuat pesanan baru
      cy.get('button.css-19ea0rp').click();
      cy.get('button.MuiButton-containedPrimary.css-ef2kv5').click();
      
      // Langkah 7: Memilih opsi layanan dan menunggu
      cy.contains('button.MuiButton-outlined.MuiButton-outlinedInfo', 'Tipe Muatan').click();
      cy.wait(30000);
      cy.contains('button.css-1dstrlh', '1 Tersedia').click();
      cy.wait(1000);
      cy.contains('button.MuiButton-outlinedPrimary.css-1m5071m', 'Tambah Pesanan').click();
      cy.wait(25000);
      
      // Langkah 8: Mengisi detail pesanan
      cy.get('#react-select-8-input').click().type('Tipe Muatan{enter}');
      cy.get('#react-select-12-input').click().type('Nama Shipper{enter}');
      cy.get('#react-select-10-input').click().type('Jenis Kendaraan{enter}');
      cy.get('#react-select-13-input').click().type('Jenis Distribusi{enter}');
      cy.get('#react-select-14-input').click().type('Jenis Gudang{enter}');
      cy.contains('button.MuiButton-outlinedPrimary.css-1m5071m', 'Tambah Pesanan').click();
      
      // Langkah 9: Mengatur waktu pengiriman
      cy.get('.css-ow2k4a > div:nth-child(1) > input:nth-child(2)').type('Tanggal');
      cy.get('.css-ow2k4a > div:nth-child(2) > input:nth-child(2)').type('Jam');
      cy.wait(4000);
      cy.get('#react-select-15-input').click().type('Nama Gudang Asal{enter}');
      cy.get('#react-select-16-input').click().type('Nama Gudang Tujuan{enter}');
      cy.get('button.MuiButton-root:nth-child(1)').click();
      
      // Langkah 10: Menambahkan detail barang dan keterangan
      cy.get('button.MuiButton-outlined:nth-child(1)').click();
      cy.get('#react-select-17-input').click().type('Tipe Paket{enter}');
      cy.get('input[placeholder="Obat,Vitamin..."]').type('Nama Paket');
      cy.get('.css-1prst3z > div:nth-child(3) > input:nth-child(2)').type('Jumlah');
      cy.get('.css-1prst3z > div:nth-child(4) > input:nth-child(2)').type('Volume');
      cy.get('.css-1prst3z > div:nth-child(5) > input:nth-child(2)').type('Berat');
      cy.contains('button.MuiButtonBase-root.MuiButton-contained.MuiButton-containedPrimary.css-d9qacf', 'Tambah').click();
      cy.contains('button.MuiButtonBase-root.MuiButton-contained.MuiButton-containedPrimary.css-d9qacf', 'Lanjutkan').click();
      cy.contains('button.MuiButtonBase-root.MuiButton-contained.MuiButton-containedPrimary.css-d9qacf', 'Tambah Order').click();
      cy.get('button.MuiButtonBase-root.MuiButton-contained.MuiButton-containedWarning.css-1d2e85l').click();
      cy.wait(1000);
      
      // Langkah 11: Submit pesanan
      cy.contains('button.MuiButtonBase-root.MuiButton-contained.MuiButton-containedPrimary.css-d9qacf', 'Submit').click();
      cy.contains('li.MuiMenuItem-root', 'Kirim Pesanan').click();
      cy.wait(1000);
      cy.contains('button.MuiButtonBase-root.MuiButton-contained.MuiButton-containedSuccess.css-d9qacf', 'Ya').click();
  });
});
