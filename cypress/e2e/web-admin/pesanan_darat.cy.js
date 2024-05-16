// Langkah 1: Mengunjungi halaman web yang ingin ditest
cy.visit('URL');

// Langkah 2: Melakukan login
cy.get('input[placeholder="Silahkan masukan Email"]').type('email');
cy.get('input[placeholder="Silahkan masukan Password"]').type('password');
cy.get('button.MuiButton-containedPrimary').click();

// Langkah 3: Pencarian Pesanan Darat
cy.wait(7000);
cy.get('input[placeholder="Cari Page,ID Order,ID Trip"]').type('Pesanan Darat{enter}');
cy.wait(25000);

// Langkah 4: Pemilihan Layanan
cy.get('button.css-19ea0rp').click();
cy.get('button.MuiButton-containedPrimary[type="button"][style="width: 14rem;"]').click({ multiple: true });
cy.contains('button.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedInfo.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.css-6vxchq', 'Tipe Muatan').click();
cy.contains('button.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.css-1m5071m', 'Nama Perusahaan').click();
cy.wait(2000);
cy.get('#react-select-4-input').click().type('Tipe Muatan{enter}');
cy.wait(40000);

// Langkah 5: Pengisian Detail Pesanan
cy.get('#react-select-8-input').click().type('Nama Shipper{enter}');
cy.get('#react-select-6-input').click().type('Jenis Kendaraan{enter}');
cy.get('#react-select-7-input').click().type('Suhu{enter}');
cy.get('#react-select-9-input').click().type('Jenis Distribusi{enter}');
cy.get('#react-select-10-input').click().type('Jenis Gudang{enter}');

// Langkah 6: Pengaturan Waktu Pengiriman
cy.get('button.MuiButtonBase-root:nth-child(3)').click();
cy.get('.css-ow2k4a > div:nth-child(1) > input:nth-child(2)').type('Tanggal');
cy.get('.css-ow2k4a > div:nth-child(2) > input:nth-child(2)').type('Jam');
cy.wait(4000);
cy.get('#react-select-11-input').click().type('Nama Gudang Asal{enter}');
cy.get('#react-select-12-input').click().type('Nama Gudang Tujuan{enter}');
cy.get('button.MuiButton-root:nth-child(1)').click();

// Langkah 7: Pengisian Detail Setiap Pesanan
cy.get('button.MuiButton-outlined:nth-child(1)').click();
cy.get('#react-select-13-input').click().type('Tipe Paket{enter}');
cy.get('input[placeholder="Obat,Vitamin..."]').type('Nama Paket');
cy.get('.css-1prst3z > div:nth-child(3) > input:nth-child(2)').type('Jumlah');
cy.get('.css-1prst3z > div:nth-child(4) > input:nth-child(2)').type('Volume');
cy.get('.css-1prst3z > div:nth-child(5) > input:nth-child(2)').type('Berat');
cy.contains('button.MuiButtonBase-root.MuiButton-contained.MuiButton-containedPrimary.css-d9qacf', 'Tambah').click();
cy.contains('button.MuiButtonBase-root.MuiButton-contained.MuiButton-containedPrimary.css-d9qacf', 'Lanjutkan').click();
cy.contains('button.MuiButtonBase-root.MuiButton-contained.MuiButton-containedPrimary.css-d9qacf', 'Tambah Order').click();
cy.get('button.MuiButtonBase-root.MuiButton-contained.MuiButton-containedWarning.css-1d2e85l').click();
cy.wait(1000);
cy.contains('button.MuiButtonBase-root.MuiButton-contained.MuiButton-containedPrimary.css-d9qacf', 'Submit').click();

// Langkah 8: Konfirmasi Pesanan
cy.contains('li.MuiMenuItem-root', 'Kirim Pesanan').click();
cy.wait(1000);
cy.contains('button.MuiButtonBase-root.MuiButton-contained.MuiButton-containedSuccess.css-d9qacf', 'Ya').click();
