-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-04-16 10:37:24
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `news`
--

-- --------------------------------------------------------

--
-- 表的结构 `category`
--

CREATE TABLE `category` (
  `cid` int(10) NOT NULL,
  `cname` varchar(255) NOT NULL,
  `cicon` varchar(100) NOT NULL,
  `clas` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `category`
--

INSERT INTO `category` (`cid`, `cname`, `cicon`, `clas`) VALUES
(1, '新鲜事', 'icon-dengpao1', 'pet_nav_xinxianshi'),
(2, '趣闻', 'icon-start', 'pet_nav_zhangzhishi'),
(3, '阅读', 'icon-yuedu', 'pet_nav_kantuya'),
(4, '专题', 'icon-circle1', 'pet_nav_mengzhuanti'),
(5, '订阅', 'icon-caixin-01', 'pet_nav_meirong'),
(6, '专栏', 'icon-icon-test', 'pet_nav_yiyuan'),
(7, '讨论', 'icon-taolun', 'pet_nav_dianpu');

-- --------------------------------------------------------

--
-- 表的结构 `content`
--

CREATE TABLE `content` (
  `cid` int(10) NOT NULL,
  `cname` varchar(255) NOT NULL,
  `ctitle` varchar(255) NOT NULL,
  `cdesc` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `manage`
--

CREATE TABLE `manage` (
  `mid` int(10) NOT NULL,
  `username` varchar(10) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `manage`
--

INSERT INTO `manage` (`mid`, `username`, `password`) VALUES
(1, 'admin', '123456');

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE `news` (
  `nid` int(10) NOT NULL,
  `ntitle` varchar(255) NOT NULL,
  `nimage` varchar(255) NOT NULL,
  `ncontent` longtext NOT NULL,
  `ndesc` varchar(255) NOT NULL,
  `ndate` varchar(255) NOT NULL,
  `nauthor` varchar(255) NOT NULL,
  `cid` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`nid`, `ntitle`, `nimage`, `ncontent`, `ndesc`, `ndate`, `nauthor`, `cid`) VALUES
(1, '十一长假哪也不去，宅在家里看电影！', '/upload/2018-4-10/15233532705161.png', '每逢长假，总有那么一群人选择远离人山人海，静静地呆在家，坐在电脑电视前。长时间的工作学习让他们感觉很疲惫，对什么都提不起劲，打开电脑却不知道干什么好…', '这是关于新鲜事的新闻', '2018-04-10 17:41:36.547', 'admin', 1),
(2, '不是说好做彼此的天使吗？连最后一口汉堡也不给我', '/upload/2018-4-10/15233533237436.png', '国外网友waxiestapple在论坛Reddit贴出爱犬照片，指出“我的狗狗好像瘦了点”“因为我刚刚把最后一口汉堡吃掉”，只见这只哈士奇一脸惨遭背叛的样子，对主人露出相当不可思议的表情。', '这是关于趣闻的新闻', '2018-04-10 17:42:24.025', 'admin', 2),
(3, '养了猫的飞飞', '/upload/2018-4-10/15233534187269.png', '浣熊孤儿掉到树下，被一家人收养之后……', '', '2018-04-10 17:44:02.836', 'admin', 3),
(4, '怦然心动！澳洲大眼宝宝逆天睫毛萌翻全球！', '/upload/2018-4-10/15233541011481.jpg', '来自澳大利亚布里斯班的十个月大的萌宝Egypt拥有一双修长的睫毛、清澈的眼眸，可爱的模样让她在社交网站上爆红。', '这是关于专题的新闻', '2018-04-10 17:55:20.841', 'admin', 4),
(5, '郑秀文晒素颜照后秒删，仰拍角度太毁人网友认不出', '/upload/2018-4-10/152335426462415.png', '4月10日，郑秀文晒了一张自己的素颜健身照，网友惊呼：“这是当年唱着《眉飞色舞》的郑秀文？”完全让人不敢认！', '这是关于订阅的新闻', '2018-04-10 17:58:07.104', 'admin', 5),
(6, '《凤囚凰》的缝纫机是小儿科，于正新剧让陈数顶着盆栽就出镜了', '/upload/2018-4-10/15233543153044.jpg', '从《半妖倾城》到《凤囚凰》，再到现在即将播出的《朝歌》，小编不得不服于正在造型方面的脑洞是越来越大了，不过据说，这电视剧斥3亿巨资、历3年精心筹备、走过二万多公里辗转新疆喀纳斯、魔鬼城、天山大峡谷等多地实地取景、近六个月风雨兼程日夜拍摄，所以大家还是期待一下吧！', '这是关于专栏的新闻', '2018-04-10 17:59:19.599', 'admin', 6),
(7, '“一户一宅”政策，处在农村的我们一定要正确解读', '/upload/2018-4-10/15233544180759.jpg', '农村宅基地确权正在如火如荼的进行，并且2018年接近尾声。而有的人依然没有正确理解“一户一宅”的政策，在这里详细说明，望广大农民朋友们提前做准备。“一户”解读', '这是关于讨论的新闻', '2018-04-10 18:00:46.776', 'admin', 7);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `uid` int(10) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`uid`, `username`, `password`) VALUES
(1, 'admin', '123456'),
(2, 'zhangsan', '123456');

-- --------------------------------------------------------

--
-- 表的结构 `website`
--

CREATE TABLE `website` (
  `wid` int(10) NOT NULL,
  `title` varchar(255) NOT NULL,
  `keywords` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `phonename` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `website`
--

INSERT INTO `website` (`wid`, `title`, `keywords`, `description`, `phonename`) VALUES
(1, '这是一个网站标题', '美团滴滴大战：“0元叫车”补贴战重现 ', '新入场“选手”掀起久违的“补贴大战”，滴滴等“老司机”也打起“反击”，乘客和司机乐得得实惠。', '18152467809'),
(2, '发你是', '啥51', '方法都没放假', '5845158');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `content`
--
ALTER TABLE `content`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `manage`
--
ALTER TABLE `manage`
  ADD PRIMARY KEY (`mid`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`nid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `website`
--
ALTER TABLE `website`
  ADD PRIMARY KEY (`wid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `category`
--
ALTER TABLE `category`
  MODIFY `cid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- 使用表AUTO_INCREMENT `content`
--
ALTER TABLE `content`
  MODIFY `cid` int(10) NOT NULL AUTO_INCREMENT;
--
-- 使用表AUTO_INCREMENT `manage`
--
ALTER TABLE `manage`
  MODIFY `mid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- 使用表AUTO_INCREMENT `news`
--
ALTER TABLE `news`
  MODIFY `nid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `uid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- 使用表AUTO_INCREMENT `website`
--
ALTER TABLE `website`
  MODIFY `wid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
