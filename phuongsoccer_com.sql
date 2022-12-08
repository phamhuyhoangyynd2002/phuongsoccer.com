-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th12 07, 2022 lúc 10:53 AM
-- Phiên bản máy phục vụ: 10.4.25-MariaDB
-- Phiên bản PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `phuongsoccer.com`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `id_users` int(11) NOT NULL,
  `id_Products_details` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `cart`
--

INSERT INTO `cart` (`id`, `id_users`, `id_Products_details`, `amount`, `createdAt`, `updatedAt`) VALUES
(5, 9, 3, 1, '2022-12-04 23:04:18', '2022-12-04 23:04:18'),
(6, 9, 18, 2, '2022-12-04 23:04:42', '2022-12-04 23:04:42');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `email` varchar(1000) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `phone_Number` int(11) NOT NULL,
  `note` varchar(1000) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `discount_code`
--

CREATE TABLE `discount_code` (
  `id` int(11) NOT NULL,
  `user_Updater` int(11) NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  `discount_Percent` int(11) NOT NULL DEFAULT 0,
  `discount_Minus` int(11) NOT NULL DEFAULT 0,
  `minimun_order_value` int(11) NOT NULL,
  `code` varchar(1000) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `img`
--

CREATE TABLE `img` (
  `id` int(11) NOT NULL,
  `id_Products` int(11) NOT NULL,
  `image_path` varchar(1000) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `img`
--

INSERT INTO `img` (`id`, `id_Products`, `image_path`, `createdAt`, `updatedAt`) VALUES
(1, 1, '4ku1zxtAH7388-081AH7388-810_5.jpg', '2022-12-01 15:20:41', '2022-12-01 15:20:41'),
(2, 1, 'geg496AH7388-081AH7388-810_4.jpg', '2022-12-01 15:20:41', '2022-12-01 15:20:41'),
(3, 1, 'vbft0sAH7388-081AH7388-810_3.jpg', '2022-12-01 15:20:41', '2022-12-01 15:20:41'),
(4, 1, 'iviicAH7388-081AH7388-810_2.jpg', '2022-12-01 15:20:41', '2022-12-01 15:20:41'),
(5, 1, 'tt76poAH7388-081AH7388-810_1.jpg', '2022-12-01 15:20:41', '2022-12-01 15:20:41'),
(6, 7, 'o7hrspAT7995-104AT7995-104_5.jpg', '2022-12-01 15:23:25', '2022-12-01 15:23:25'),
(7, 7, 'v29kksAT7995-104AT7995-104_4.jpg', '2022-12-01 15:23:25', '2022-12-01 15:23:25'),
(8, 7, 'qj05rqAT7995-104AT7995-104_3.jpg', '2022-12-01 15:23:25', '2022-12-01 15:23:25'),
(9, 7, 't07yvqAT7995-104AT7995-104_2.jpg', '2022-12-01 15:23:25', '2022-12-01 15:23:25'),
(10, 7, '9ujmkiAT7995-104AT7995-104_1.jpg', '2022-12-01 15:23:25', '2022-12-01 15:23:25'),
(11, 8, '5ujmlBQ7497-810BQ7497-810_5.jpg', '2022-12-01 15:25:53', '2022-12-01 15:25:53'),
(12, 8, '6amsyeBQ7497-810BQ7497-810_4.jpg', '2022-12-01 15:25:53', '2022-12-01 15:25:53'),
(13, 8, '7rteccBQ7497-810BQ7497-810_3.jpg', '2022-12-01 15:25:53', '2022-12-01 15:25:53'),
(14, 8, 'gkt9cfBQ7497-810BQ7497-810_2.jpg', '2022-12-01 15:25:53', '2022-12-01 15:25:53'),
(15, 8, '4tjgrtBQ7497-810BQ7497-810_1.jpg', '2022-12-01 15:25:53', '2022-12-01 15:25:53'),
(16, 9, 'l0yjriCV0978-760CV0978-760_5.jpg', '2022-12-01 15:28:37', '2022-12-01 15:28:37'),
(17, 9, 'ide1w9CV0978-760CV0978-760_4.jpg', '2022-12-01 15:28:37', '2022-12-01 15:28:37'),
(18, 9, 'e42q3CV0978-760CV0978-760_3.jpg', '2022-12-01 15:28:37', '2022-12-01 15:28:37'),
(19, 9, 'tx0x8CV0978-760CV0978-760_2.jpg', '2022-12-01 15:28:37', '2022-12-01 15:28:37'),
(20, 9, 'kw99qdCV0978-760CV0978-760_1.jpg', '2022-12-01 15:28:37', '2022-12-01 15:28:37'),
(21, 10, '0fq2daCV1001-004CV1001-004_5.jpg', '2022-12-01 15:30:28', '2022-12-01 15:30:28'),
(22, 10, 'tafptCV1001-004CV1001-004_4.jpg', '2022-12-01 15:30:28', '2022-12-01 15:30:28'),
(23, 10, 'd7gyhpCV1001-004CV1001-004_3.jpg', '2022-12-01 15:30:28', '2022-12-01 15:30:28'),
(24, 10, 'f2wvCV1001-004CV1001-004_2.jpg', '2022-12-01 15:30:28', '2022-12-01 15:30:28'),
(25, 10, 'c53qjCV1001-004CV1001-004_1.jpg', '2022-12-01 15:30:28', '2022-12-01 15:30:28'),
(26, 11, '5qjdp8DA1191-054DA1191-054_5.jpg', '2022-12-01 15:32:53', '2022-12-01 15:32:53'),
(27, 11, 'tbi7qtDA1191-054DA1191-054_4.jpg', '2022-12-01 15:32:53', '2022-12-01 15:32:53'),
(28, 11, 'yu7keDA1191-054DA1191-054_3.jpg', '2022-12-01 15:32:53', '2022-12-01 15:32:53'),
(29, 11, 'm8afnaDA1191-054DA1191-054_2.jpg', '2022-12-01 15:32:53', '2022-12-01 15:32:53'),
(30, 11, 'wm0smcDA1191-054DA1191-054_1.jpg', '2022-12-01 15:32:53', '2022-12-01 15:32:53'),
(31, 12, 'dbs0lDA1191-343DA1191-343_5.jpg', '2022-12-01 15:34:43', '2022-12-01 15:34:43'),
(32, 12, '1rm2vgDA1191-343DA1191-343_4.jpg', '2022-12-01 15:34:43', '2022-12-01 15:34:43'),
(33, 12, 'yeloynDA1191-343DA1191-343_3.jpg', '2022-12-01 15:34:43', '2022-12-01 15:34:43'),
(34, 12, '7p0xgvDA1191-343DA1191-343_2.jpg', '2022-12-01 15:34:43', '2022-12-01 15:34:43'),
(35, 12, 'b03en5DA1191-343DA1191-343_1.jpg', '2022-12-01 15:34:43', '2022-12-01 15:34:43'),
(36, 13, 'm75fwdDC0803-570DC0803-570_5.jpg', '2022-12-01 15:36:29', '2022-12-01 15:36:29'),
(37, 13, 'adee8DC0803-570DC0803-570_4.jpg', '2022-12-01 15:36:29', '2022-12-01 15:36:29'),
(38, 13, 'a75k7gDC0803-570DC0803-570_3.jpg', '2022-12-01 15:36:29', '2022-12-01 15:36:29'),
(39, 13, 'kgw20qDC0803-570DC0803-570_2.jpg', '2022-12-01 15:36:29', '2022-12-01 15:36:29'),
(40, 13, 'bht0q4DC0803-570DC0803-570_1.jpg', '2022-12-01 15:36:29', '2022-12-01 15:36:29'),
(41, 14, 'z3bc9hDJ2851-054DJ2851-054_5.jpg', '2022-12-01 15:38:41', '2022-12-01 15:38:41'),
(42, 14, 'nd6j5nDJ2851-054DJ2851-054_4.jpg', '2022-12-01 15:38:41', '2022-12-01 15:38:41'),
(43, 14, 'h77vfuDJ2851-054DJ2851-054_3.jpg', '2022-12-01 15:38:41', '2022-12-01 15:38:41'),
(44, 14, 'hsc1tDJ2851-054DJ2851-054_2.jpg', '2022-12-01 15:38:41', '2022-12-01 15:38:41'),
(45, 14, 'jqmt1qDJ2851-054DJ2851-054_1.jpg', '2022-12-01 15:38:41', '2022-12-01 15:38:41'),
(46, 15, 'c7w0syEG0913EG0913_5.jpg', '2022-12-01 15:40:44', '2022-12-01 15:40:44'),
(47, 15, '364larEG0913EG0913_4.jpg', '2022-12-01 15:40:44', '2022-12-01 15:40:44'),
(48, 15, '6s59dfEG0913EG0913_3.jpg', '2022-12-01 15:40:44', '2022-12-01 15:40:44'),
(49, 15, 'u0i2cwEG0913EG0913_2.jpg', '2022-12-01 15:40:44', '2022-12-01 15:40:44'),
(50, 15, 'o6ai5wEG0913EG0913_1.jpg', '2022-12-01 15:40:44', '2022-12-01 15:40:44'),
(51, 16, 'pv24qgFW6940FW6940_5.jpg', '2022-12-01 15:42:37', '2022-12-01 15:42:37'),
(52, 16, 'i5cjtkFW6940FW6940_4.jpg', '2022-12-01 15:42:37', '2022-12-01 15:42:37'),
(53, 16, 'v81xpdFW6940FW6940_3.jpg', '2022-12-01 15:42:37', '2022-12-01 15:42:37'),
(54, 16, '2owsevFW6940FW6940_2.jpg', '2022-12-01 15:42:37', '2022-12-01 15:42:37'),
(55, 16, 'ky4nl6FW6940FW6940_1.jpg', '2022-12-01 15:42:37', '2022-12-01 15:42:37'),
(56, 17, '4ef5koFY3266FY3266_5.jpg', '2022-12-01 15:44:53', '2022-12-01 15:44:53'),
(57, 17, '7o7qhFY3266FY3266_4.jpg', '2022-12-01 15:44:53', '2022-12-01 15:44:53'),
(58, 17, '90bzjbFY3266FY3266_2.jpg', '2022-12-01 15:44:53', '2022-12-01 15:44:53'),
(59, 17, 'yrkoyvFY3266FY3266_3.jpg', '2022-12-01 15:44:53', '2022-12-01 15:44:53'),
(60, 17, 'qabxvFY3266FY3266_1.jpg', '2022-12-01 15:44:53', '2022-12-01 15:44:53'),
(61, 18, '0s2t6iFY3280FY3280_5.jpg', '2022-12-01 15:48:47', '2022-12-01 15:48:47'),
(62, 18, 'akpwcsFY3280FY3280_4.jpg', '2022-12-01 15:48:47', '2022-12-01 15:48:47'),
(63, 18, '4ig7vlFY3280FY3280_3.jpg', '2022-12-01 15:48:47', '2022-12-01 15:48:47'),
(64, 18, '3ohgqFY3280FY3280_2.jpg', '2022-12-01 15:48:47', '2022-12-01 15:48:47'),
(65, 18, '2hkv4fFY3280FY3280_1.jpg', '2022-12-01 15:48:47', '2022-12-01 15:48:47');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(1000) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `author` varchar(100) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `description` varchar(10000) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `user_Updater` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `id_buyer` int(11) NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `buyer_name` varchar(255) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `phone_Number` int(11) NOT NULL,
  `note` varchar(255) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `cash_payment` int(11) NOT NULL,
  `id_status` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders_details`
--

CREATE TABLE `orders_details` (
  `id` int(11) NOT NULL,
  `id_order` int(11) NOT NULL,
  `id_products_details` int(11) NOT NULL,
  `out_price` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `producer`
--

CREATE TABLE `producer` (
  `id` int(11) NOT NULL,
  `name` varchar(500) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `description` varchar(10000) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `producer`
--

INSERT INTO `producer` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'nike', 'nike', '2022-11-25 12:49:46', '2022-11-25 12:49:46'),
(2, 'adidas', 'adidas', '2022-11-25 12:49:46', '2022-11-25 12:49:46'),
(3, 'converse', 'converse', '2022-11-25 12:50:14', '2022-11-25 12:50:14'),
(4, 'vans', 'vans', '2022-11-25 12:50:14', '2022-11-25 12:50:14'),
(5, 'puma', 'puma', '2022-11-25 12:50:43', '2022-11-25 12:50:43'),
(6, 'fila', 'fila', '2022-11-25 12:50:43', '2022-11-25 12:50:43'),
(7, 'mlb', 'mlb', '2022-11-25 12:50:59', '2022-11-25 12:50:59'),
(8, 'new-balance', 'new-balance', '2022-11-25 12:50:59', '2022-11-25 12:50:59'),
(9, 'Mizuno', '', '2022-12-01 08:58:42', '2022-12-01 08:58:42'),
(10, 'accessory', '', '2022-12-04 21:55:11', '2022-12-04 21:55:11');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `id_producer` int(11) NOT NULL,
  `id_tag` int(11) NOT NULL,
  `product_Image` varchar(1000) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `sold` int(11) NOT NULL DEFAULT 0,
  `discount_max` int(11) NOT NULL DEFAULT 0,
  `discount_min` int(11) NOT NULL DEFAULT 1000000000,
  `code` varchar(255) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `user_Update` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `id_producer`, `id_tag`, `product_Image`, `sold`, `discount_max`, `discount_min`, `code`, `user_Update`, `createdAt`, `updatedAt`) VALUES
(1, 'Nike Mercurial VaporX XII Pro', 'Giày đá bóng Nike Mercurial VaporX XII Pro TF- Black/ Total Orange/ White, mã sản phẩm: AH7388-081, giày đá bóng Nike chính hãng, giày đá bóng Nike …  dòng sẩn phẩm mới hoàn toàn, upper làm từ da tổng hợp, đế TF đá sân cỏ nhân tạo ', 1, 2, 'hwegplAH7388-081AH7388-810_1.jpg', 0, 2300000, 1900000, 'AH7388-810', 5, '2022-12-01 15:20:41', '2022-12-06 16:42:22'),
(7, 'Nike Mercurial Vapor XIII Academy Neymar', 'Giày đá bóng Nike Mercurial Vapor XIII Academy Neymar TF – White/ Black/ Racer Blue/ Volt, mã sản phẩm AT7995-104, phiên bản độc quyền cho siêu sao Neymar, giày bóng đá Nike chính hãng, giày đá bóng Nike Mercurial huyền thoại, sản phẩm đầu tay của dòng Mercurial thế hệ thứ 13 huyền thoại, mỗi một', 1, 2, 'v0rgkaAT7995-104AT7995-104_1.jpg', 1, 1700000, 1300000, 'AT7995-104', 5, '2022-12-01 15:23:25', '2022-12-06 16:42:22'),
(8, 'Nike Phantom VNM Pro', 'Giày đá bóng Nike Phantom VNM Pro TF – Bright Mango/ White, mã sản phẩm BQ7497-810, giày bóng đá chính hãng, giày bóng đá sân cỏ nhân tạo … upper làm từ sợi flyknit và được phủ da tổng hợp, upper giày cực mềm mại và êm ái, đế giày kiểu TF phù hợp chơi', 1, 2, 'rmy9ieBQ7497-810BQ7497-810_1.jpg', 0, 1900000, 1500000, 'BQ7497-810', 5, '2022-12-01 15:25:53', '2022-12-06 16:42:22'),
(9, 'Nike Mercurial Vapor 14 Academy', 'Giày đá bóng Nike Mercurial Vapor 14 Academy TF– Volt/ Bright Crimson/ Black CV0978-760, mã sản phẩm CV0978-760, nằm trong bộ sưu tập Nike Motivation pack cực đẹp, giày đá bóng chính hãng Nike mới nhất, dòng sản phẩm mới ra mắt 2021, model giày Nike Mercurial Vapor 14 mới, được thiết kế lại với', 1, 2, 'a699ojCV0978-760CV0978-760_1.jpg', 0, 1850000, 1450000, 'CV0978-760', 5, '2022-12-01 15:28:37', '2022-12-06 16:42:22'),
(10, 'Nike Mercurial Vapor 14 Pro', 'Giày đá bóng chính hãng Nike Mercurial Vapor 14 Pro TF- Black/ Iron Grey CV1001-004, model giày bóng đá Nike Mercurial Vapor 14 Pro mới nhất, đây là colorway thứ 2 của Nike Mercurial thế hệ 14 cực đẹp, ra mắt đầu tháng 4/2021, mang trọng trách tiếp nối thành công của Vapro 13 Pro', 1, 1, '51daksCV1001-004CV1001-004_1.jpg', 0, 2350000, 1950000, 'CV1001-004', 5, '2022-12-01 15:30:28', '2022-12-06 16:42:22'),
(11, 'Nike Tiempo 9 Legend Academy \"Progress\"', 'Nike Tiempo 9 Legend Academy \"Progress\" TF - DA1191-054 - Trắng/Neon', 1, 2, 'vefg6DA1191-054DA1191-054_1.jpg', 2, 1900000, 1500000, 'DA1191-054', 5, '2022-12-01 15:32:53', '2022-12-06 16:42:22'),
(12, 'Nike Tiempo Legend 9 Academy ', 'Giày bóng đá Nike Tiempo Legend 9 Academy TF – Bonded pack màu xanh lá mạ cam DA1191-343 ! Giày đá bóng Nike Tiempo Legend 9 Academy TF chính hãng, một trong những đôi giày Nike Tiempo nhẹ nhất từng được sản xuất nhưng vẫn giữ được mọi ưu điểm của dòng giày đá bóng huyền thoại này. Model Nike Tiempo 9 mang thiết kế mới khác biệt so với thệ hệ trước, upper có phần đơn điệu khi không sử dụng các khối kim cương 3D nữa, chất liệu chế tạo vẫn từ da bê cực mềm, đã được xử lý kĩ càng, bên ngoài được bọc một lớp da tổng hợp chống nước- đảm bảo chơi bóng trong mọi điều kiện thời tiết, bất kể trời mưa.', 1, 1, 'dhbf0inDA1191-343DA1191-343_1.jpg', 0, 2150000, 1750000, 'DA1191-343', 5, '2022-12-01 15:34:43', '2022-12-06 16:42:22'),
(13, 'Nike Phantom GT 2 Academy', 'Giày đá bóng Nike Phantom GT 2 Academy TF Recharge pack – Sapphire/ Volt/ Grey Fog/ Blue Void DC0803-570, giày đá bóng chính hãng Nike Phantom GT 2 Academy, nằm trong bộ sưu tập Nike Recharge pack, giày Nike Phantom GT thấp cổ, giày Phantom GT cổ truyền thống… sản phẩm hoàn toàn mới, thiết kế trẻ trung và mạnh mẽ, ngoại thất cực đẹp… dòng giày Nike Phantom GT hướng tới lối chơi toàn diện, hỗ trợ khả năng rê bóng, chuyển bóng và sút bóng… Upper sử dụng chất liệu da tổng hợp, đế giày kiểu TF phù hợp với sân cỏ nhân tạo', 1, 2, '9gpqaDC0803-570DC0803-570_1.jpg', 0, 1700000, 1300000, 'DC0803-570', 5, '2022-12-01 15:36:29', '2022-12-06 16:42:22'),
(14, 'Nike Mercurial Vapor 14 Pro', 'Giày Nike Mercurial Vapor 14 Pro TF Zoom Progress pack- Football Grey/ Blackened Blue DJ2851-054, mã sản phẩm DJ2851-054, phiên bản Vapor Pro 14 năm 2022 mới nhất, model giày bóng đá Nike Mercurial Vapor 14 Pro cực kỳ được yêu thích ở Việt Nam, được cho là nằm trong bộ sưu tập Nike The First Main pack cực đẹp mang phong cách hiện đại, mang trọng trách tiếp nối thành công của Vapro 13 Pro, tôi chắc chắn siêu phẩm này sẽ luôn giữ top seller ! Dòng giày Nike Mercurial hiện được sử dụng bởi các cầu thủ chơi bóng đá tấn công hàng đầu thế giới như Cristiano Ronaldo, Kylian Mbappe, Bruno Fernandes … ( ban đầu có tin đây là colorway trong The Main Pack tuy nhiên Nike đã đổi tên thành Nike Blueprint khi chính thức ra mắt )', 1, 2, 'n6jfmDJ2851-054DJ2851-054_1.jpg', 0, 3250000, 2500000, 'DJ2851-054', 5, '2022-12-01 15:38:41', '2022-12-06 16:42:21'),
(15, 'Adidas Predator 20.3', 'Giày đá bóng Adidas Predator 20.3 TF Uniforia- White/ Core Black/ Pop EG0913, mã sản phẩm: EG0913, giày Adidas Uniforia 2020, giày đá bóng Adidas Predator 2020, giày Adidas Predator 2020, dòng sản phẩm Predator 2020, giày đá bóng sân cỏ nhân tạo 2020, dòng giày đá bóng Adidas Predator 2020 mang diện mạo mới', 2, 2, 'q73a9oEG0913EG0913_1.jpg', 0, 1400000, 1000000, 'EG0913', 5, '2022-12-01 15:40:44', '2022-12-06 16:42:21'),
(16, 'Adidas X Ghosted .3', 'Giày bóng đá Adidas X Ghosted .3 TF Superspectral – Pink / Orange/ Black FW6940, giày đá bóng Adidas Ghosted 2021 siêu mới, nằm trong bộ sưu tập giày Adidas Superspectral …  X Ghosted là thế hệ tiếp theo của dòng giày huyền thoại Adidas X, với những cải tiến mới, xứng đáng là một trong những đôi giày đáng chơi nhất hiện nay. Đặc điểm nổi bật:  Upper cải tiến siêu mỏng, cảm giác bóng cực tốt Trọng lượng nhẹ hơn nhiều so với các thế hệ trước Form giày ôm, giữ chân chắc chắn Hỗ trợ những cầu thủ có thiên hướng chơi tốc độ, dê dắt, dứt điểm Đế TF kiểu mới bám sân hơn', 1, 1, 'opclzmFW6940FW6940_1.jpg', 0, 1500000, 1100000, 'FW6940', 5, '2022-12-01 15:42:37', '2022-12-06 16:42:21'),
(17, 'ADIDAS X SPEEDFLOW .3 LACELESS', 'adidas X SpeedFlow .3 Laceless TF là mẫu giày bóng đá sân cỏ nhân tạo adidas chính hãng. Mẫu giày này thường được sử dụng trong thi đấu 5-7 người. adidas X SpeedFlow .3 Laceless TF là mẫu giày được thiết kế để thay thế cho dòng X Ghosted .3 Laceless TF của adidas. Chaos (X) phù hợp với các cầu thủ tấn công, giàu tốc độ. Những cải tiến đáng kể về upper giúp X SpeedFlow .3 Laceless tạo ra sự trải nghiệm hoàn toàn mới so với X Ghosted. Với những cải tiến về upper thì form của X SpeedFlow .3 Laceless đã có sự thoải mái hơn về bề ngang cũng như mu bàn chân khi so với X Ghosted.  Cầu thủ đại diện: Luis Suarez, Karim Benzema, Gareth Bale…  Điểm mặt các công nghệ nổi bật trên mẫu giày này:  Upper: Synthetic – da tổng hợp 3D mang lại cảm giác chạm banh cực tốt. Bề mặt upper nhám, giúp người chơi dễ dàng kiểm soát trái banh. Lưỡi gà của X SpeedFlow .3 Laceless được làm liền nguyên khối, giúp đôi giày trở nên ôm chân hơn. Outsole: đế cao su, bám sân tạo', 2, 2, 'atgojFY3266FY3266_1.jpg', 0, 1800000, 1400000, 'FY3266', 5, '2022-12-01 15:44:53', '2022-12-06 16:42:21'),
(18, 'Adidas X SpeedFlow .1', 'Giày bóng đá Adidas X SpeedFlow .1 TF Meteorite- Solar Red/ Black/ White, mã sản phẩm FY3280, nằm trong bộ sưu tập Adidas Meteorite pack, siêu phẩm cao cấp nhất dành cho sân tạo, sản phẩm đỉnh cao nhất của dòng giày Adidas X SpeedFlow ….Giày Adidas X SpeedFlow .1 TF chính hãng, phiên khúc dành cho sân cỏ nhân tạo cao cấp với đầy đủ công nghệ đỉnh cao nhất của hãng, sự lựa chọn duy nhất ở phân khúc cao cấp. Tiếp nối truyền thống thành công, mẫu X SpeedFlow .1 TF mở ra một chương mới của dòng giày tốc độ, trọng lượng nhẹ nhưng lại cực kỳ êm ái. Upper của giày sử dụng công nghệ Primeknit mà chúng ta đã quen thuộc, nó gồm vô số sợi dệt cực mỏng nhưng đàn hồi, giúp tạo cảm giác ôm chân tối đa, bên ngoài được phủ một lớp da tổng hợp giúp chống nước và hỗ trợ kiểm soát bóng. dòng giày bóng đá Adidas chính hãng được sử dụng nhiều nhất thế giới !', 2, 2, 'lc5ojgFY3280FY3280_1.jpg', 0, 2650000, 2250000, 'FY3280', 5, '2022-12-01 15:48:47', '2022-12-06 16:42:21');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products_details`
--

CREATE TABLE `products_details` (
  `id` int(11) NOT NULL,
  `id_products` int(11) NOT NULL,
  `size` varchar(10) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `amount` int(11) DEFAULT 0,
  `price` int(11) NOT NULL,
  `discout_percent` int(11) NOT NULL DEFAULT 0,
  `discount_minus` int(11) NOT NULL DEFAULT 0,
  `user_Updater` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `products_details`
--

INSERT INTO `products_details` (`id`, `id_products`, `size`, `amount`, `price`, `discout_percent`, `discount_minus`, `user_Updater`, `createdAt`, `updatedAt`) VALUES
(1, 1, '6US', 2, 1900000, 0, 400000, 5, '2022-12-01 15:20:41', '2022-12-06 16:44:37'),
(2, 1, '7US', 2, 1900000, 0, 400000, 5, '2022-12-01 15:20:41', '2022-12-06 16:44:37'),
(3, 1, '7.5US', 1, 1900000, 0, 400000, 5, '2022-12-01 15:20:41', '2022-12-06 16:44:37'),
(4, 1, '9US', 1, 1900000, 0, 400000, 5, '2022-12-01 15:20:41', '2022-12-06 16:44:37'),
(10, 7, '7US', 1, 1300000, 0, 400000, 5, '2022-12-01 15:23:25', '2022-12-06 16:44:37'),
(11, 7, '8.5US', 2, 1300000, 0, 400000, 5, '2022-12-01 15:23:25', '2022-12-06 16:44:37'),
(12, 8, '9.5US', 1, 1500000, 0, 400000, 5, '2022-12-01 15:25:53', '2022-12-06 16:44:37'),
(13, 9, '6.5US', 1, 1450000, 0, 400000, 5, '2022-12-01 15:28:37', '2022-12-06 16:44:37'),
(14, 10, '5.5US', 1, 1950000, 0, 400000, 5, '2022-12-01 15:30:28', '2022-12-06 16:44:37'),
(15, 11, '8US', 3, 1500000, 0, 400000, 5, '2022-12-01 15:32:53', '2022-12-06 16:44:37'),
(16, 11, '8.5US', 1, 1500000, 0, 400000, 5, '2022-12-01 15:32:53', '2022-12-06 16:44:37'),
(17, 12, '9US', 1, 1750000, 0, 400000, 5, '2022-12-01 15:34:43', '2022-12-06 16:44:37'),
(18, 13, '9US', 1, 1300000, 0, 400000, 5, '2022-12-01 15:36:29', '2022-12-06 16:44:37'),
(19, 13, '9.5US', 1, 1300000, 0, 400000, 5, '2022-12-01 15:36:29', '2022-12-06 16:44:37'),
(20, 14, '7US', 3, 2850000, 0, 400000, 5, '2022-12-01 15:38:41', '2022-12-06 16:44:37'),
(21, 14, '7.5US', 1, 2500000, 0, 400000, 5, '2022-12-01 15:38:41', '2022-12-06 16:44:37'),
(22, 14, '8US', 1, 2850000, 0, 400000, 5, '2022-12-01 15:38:41', '2022-12-06 16:44:37'),
(23, 15, '7', 1, 1000000, 0, 400000, 5, '2022-12-01 15:40:44', '2022-12-06 16:44:37'),
(24, 16, '6.5US', 2, 1100000, 0, 400000, 5, '2022-12-01 15:42:37', '2022-12-06 16:44:37'),
(25, 16, '7US', 1, 1100000, 0, 400000, 5, '2022-12-01 15:42:37', '2022-12-06 16:44:37'),
(26, 16, '8US', 3, 1100000, 0, 400000, 5, '2022-12-01 15:42:37', '2022-12-06 16:44:37'),
(27, 16, '8.5US', 1, 1100000, 0, 400000, 5, '2022-12-01 15:42:37', '2022-12-06 16:44:37'),
(28, 16, '9US', 2, 1100000, 0, 400000, 5, '2022-12-01 15:42:37', '2022-12-06 16:44:37'),
(29, 16, '9.5US', 2, 1100000, 0, 400000, 5, '2022-12-01 15:42:37', '2022-12-06 16:44:37'),
(30, 17, '6.5US', 1, 1400000, 0, 400000, 5, '2022-12-01 15:44:53', '2022-12-06 16:44:37'),
(31, 17, '7US', 1, 1400000, 0, 400000, 5, '2022-12-01 15:44:53', '2022-12-06 16:44:37'),
(32, 17, '8US', 2, 1400000, 0, 400000, 5, '2022-12-01 15:44:53', '2022-12-06 16:44:37'),
(33, 17, '8.5US', 1, 1400000, 0, 400000, 5, '2022-12-01 15:44:53', '2022-12-06 16:44:37'),
(34, 18, '8.5US', 0, 2250000, 0, 400000, 5, '2022-12-01 15:48:47', '2022-12-06 16:44:37');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `role`
--

INSERT INTO `role` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Client', '2022-11-25 08:12:21', '2022-11-25 08:12:21'),
(2, 'Management staff', '2022-11-25 08:12:21', '2022-11-25 08:12:21'),
(3, 'Warehouse staff', '2022-11-25 08:12:48', '2022-11-25 08:12:48'),
(4, 'Product Manager', '2022-11-25 08:12:48', '2022-11-25 08:12:48'),
(5, 'Customer care staff', '2022-11-25 08:13:06', '2022-11-25 08:13:06');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tag`
--

CREATE TABLE `tag` (
  `id` int(11) NOT NULL,
  `name` varchar(10000) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `tag`
--

INSERT INTO `tag` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'natural grass shoes', '2022-11-26 08:47:58', '2022-11-26 08:47:58'),
(2, 'artificial grass shoes', '2022-11-26 08:47:58', '2022-11-26 08:47:58'),
(3, 'futsal shoes', '2022-12-01 09:02:51', '2022-12-01 09:02:51'),
(4, 'sneakers', '2022-12-01 09:02:51', '2022-12-01 09:02:51'),
(5, 'sport sandals', '2022-12-01 09:03:06', '2022-12-01 09:03:06'),
(6, 'fashion sandals', '2022-12-01 09:03:06', '2022-12-01 09:03:06'),
(7, 'socks', '2022-12-01 09:03:20', '2022-12-01 09:03:20'),
(8, 'gloves', '2022-12-01 09:03:20', '2022-12-01 09:03:20'),
(9, 'tapes', '2022-12-01 09:03:33', '2022-12-01 09:03:33'),
(10, 'handbag', '2022-12-01 09:03:33', '2022-12-01 09:03:33');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `phone_Number` int(11) DEFAULT NULL,
  `id_role` int(11) NOT NULL DEFAULT 1,
  `picture` varchar(255) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `sub` varchar(255) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `phone_Number`, `id_role`, `picture`, `sub`, `createdAt`, `updatedAt`) VALUES
(4, 'tahoang@gmail.com', '1', 'ta duc hoang', 1, 2, NULL, NULL, '2022-11-25 08:13:14', '2022-11-25 08:13:14'),
(5, 'phamhoang@gmail.com', '1', 'Pham Huy Hoang', NULL, 2, NULL, NULL, '2022-11-25 08:13:52', '2022-11-25 08:13:52'),
(6, 'nguyenhhoang@gmail.com', '1', 'Nguyễn Huy Hoang', NULL, 2, NULL, NULL, '2022-11-25 08:13:52', '2022-11-25 08:13:52'),
(7, 'nguyenpphoang@gmail.com', '1', 'Nguyen Phuc Hoang', NULL, 2, 'a', 'a', '2022-11-25 08:15:18', '2022-11-25 08:15:18'),
(8, 'nam@gmail.com', '1', 'Nam', NULL, 2, NULL, NULL, '2022-11-25 08:16:12', '2022-11-25 08:16:12'),
(9, 'khach@gmail.com', '1', 'khách', NULL, 1, NULL, NULL, '2022-11-25 08:16:32', '2022-11-25 08:16:32');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_users` (`id_users`),
  ADD KEY `id_Products_details` (`id_Products_details`);

--
-- Chỉ mục cho bảng `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `discount_code`
--
ALTER TABLE `discount_code`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_Updater` (`user_Updater`);

--
-- Chỉ mục cho bảng `img`
--
ALTER TABLE `img`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_Products` (`id_Products`);

--
-- Chỉ mục cho bảng `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_Updater` (`user_Updater`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_buyer` (`id_buyer`),
  ADD KEY `id_status` (`id_status`);

--
-- Chỉ mục cho bảng `orders_details`
--
ALTER TABLE `orders_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_order` (`id_order`),
  ADD KEY `id_products_details` (`id_products_details`);

--
-- Chỉ mục cho bảng `producer`
--
ALTER TABLE `producer`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_producer` (`id_producer`),
  ADD KEY `id_tag` (`id_tag`),
  ADD KEY `user_Update` (`user_Update`);

--
-- Chỉ mục cho bảng `products_details`
--
ALTER TABLE `products_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_products` (`id_products`),
  ADD KEY `user_Updater` (`user_Updater`);

--
-- Chỉ mục cho bảng `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_role` (`id_role`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `discount_code`
--
ALTER TABLE `discount_code`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `img`
--
ALTER TABLE `img`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT cho bảng `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `orders_details`
--
ALTER TABLE `orders_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `producer`
--
ALTER TABLE `producer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `products_details`
--
ALTER TABLE `products_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT cho bảng `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `tag`
--
ALTER TABLE `tag`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_185` FOREIGN KEY (`id_users`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_186` FOREIGN KEY (`id_Products_details`) REFERENCES `products_details` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `discount_code`
--
ALTER TABLE `discount_code`
  ADD CONSTRAINT `discount_code_ibfk_1` FOREIGN KEY (`user_Updater`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `img`
--
ALTER TABLE `img`
  ADD CONSTRAINT `img_ibfk_1` FOREIGN KEY (`id_Products`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `news`
--
ALTER TABLE `news`
  ADD CONSTRAINT `news_ibfk_1` FOREIGN KEY (`user_Updater`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_187` FOREIGN KEY (`id_buyer`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_188` FOREIGN KEY (`id_status`) REFERENCES `status` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `orders_details`
--
ALTER TABLE `orders_details`
  ADD CONSTRAINT `orders_details_ibfk_185` FOREIGN KEY (`id_order`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_details_ibfk_186` FOREIGN KEY (`id_products_details`) REFERENCES `products_details` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_280` FOREIGN KEY (`id_producer`) REFERENCES `producer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_281` FOREIGN KEY (`id_tag`) REFERENCES `tag` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_282` FOREIGN KEY (`user_Update`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `products_details`
--
ALTER TABLE `products_details`
  ADD CONSTRAINT `products_details_ibfk_187` FOREIGN KEY (`id_products`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_details_ibfk_188` FOREIGN KEY (`user_Updater`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Các ràng buộc cho bảng `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
