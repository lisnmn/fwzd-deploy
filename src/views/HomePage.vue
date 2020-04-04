<template>
	<body class="homepage-background">
	<el-container>
		<el-header style="padding: 0">
			<HomePageHeader></HomePageHeader>
		</el-header>
		
		<el-main>
			<el-card class="homepage-card" shadow="never">
				<el-row>
					<div style="margin-bottom: 30px;display: flex;justify-content: center;align-items: center">
						<el-input
								@keyup.enter.native="searchClick"
								placeholder="搜索..."
								prefix-icon="el-icon-search"
								size="small"
								style="width: 400px;margin-right: 10px"
								v-model="keywords">
						</el-input>
						<el-button size="small" type="primary" icon="el-icon-search" @click="searchClick">搜索
						</el-button>
					</div>
					<div style="display: flex; justify-content: center;">
						<div style="width: 1111px">
							<div v-for="(item, index) in bookList.slice((currentPage-1)*pagesize,currentPage*pagesize)"
							     :key="item.id">
								<el-tooltip effect="dark" placement="bottom">
									<p slot="content" class="homepage-image-card-info">图片集名：{{item.name}}</p>
									<p slot="content" class="homepage-image-card-info">上传者：{{item.uploader}}</p>
									<p slot="content" class="homepage-image-card-info">上传时间：{{item.uploadTime}}</p>
									<p slot="content" class="homepage-image-card-info">类型：{{item.rank}}</p>
									<el-card class="homepage-image-card" bodyStyle="padding:0px" shadow="hover">
										<img class="homepage-image"
										     :src="axios.defaults.baseURL + '/book/upload/'+ item.cover"
										     @click="moreInfo(index)">
									</el-card>
								</el-tooltip>
							</div>
						</div>
					</div>
				</el-row>
				<el-row>
					<el-pagination
							@current-change="handleCurrentChange"
							:current-page="currentPage"
							:page-size="pagesize"
							:total="bookList.length">
					</el-pagination>
				</el-row>
			</el-card>
		</el-main>
	</el-container>
	</body>
</template>

<script>
    import HomePageHeader from "../components/HomePageHeader";

    export default {
        name: "HomePage",
        components: {
            HomePageHeader
        },
        data() {
            return {
                keywords: '',
                bookList: [],
                currentPage: 1,
                pagesize: 25
            }
        },
        mounted() {
            this.loadBooks()
        },
        methods: {
            loadBooks() {
                axios.get('/book/').then(response => {
                    //console.log(response.data[0].cover)
                    if (response && response.status === 200) {
                        this.bookList = response.data
                    }
                })
                //console.log(this.bookList)
            },
            handleCurrentChange: function (currentPage) {
                this.currentPage = currentPage
            },
            searchClick() {

            },
            moreInfo(index) {
                this.$store.dispatch('setBook', this.bookList[index])
                this.$router.push('/bookInfo')
            }
        }
    }
</script>

<style>
	.homepage-background {
		background: url("../../public/image/homepage/kyouko.jpg") no-repeat center;
		height: 100%;
		width: 100%;
		background-size: cover;
		position: fixed;
		overflow: auto;
	}
	
	.homepage-card {
		margin: 30px auto;
		width: 1200px;
		box-shadow: 0 0 20px #000000;
	}
	
	.homepage-image-card {
		border: 0;
		float: left;
		margin: 10px 10px 10px 10px;
		background-color: transparent;
	}
	
	.homepage-image-card-info {
		font-size: 14px;
		margin-bottom: 6px;
	}
	
	.homepage-image {
		object-fit: cover;
		width: 200px;
		height: 200px;
	}
	
	img {
		max-width: 100%;
		max-height: 100%;
	}
</style>
